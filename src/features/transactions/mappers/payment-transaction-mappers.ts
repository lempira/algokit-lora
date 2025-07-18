import { BasePaymentTransaction, InnerPaymentTransaction, PaymentTransaction, PaymentTransactionSubType, TransactionType } from '../models'
import { invariant } from '@/utils/invariant'
import { asInnerTransactionId, mapCommonTransactionProperties } from './transaction-common-properties-mappers'
import { microAlgos } from '@algorandfoundation/algokit-utils'
import { TransactionResult } from '@/features/transactions/data/types'

const mapCommonPaymentTransactionProperties = (transactionResult: TransactionResult) => {
  invariant(transactionResult.paymentTransaction, 'payment-transaction is not set')
  const payment = transactionResult.paymentTransaction

  return {
    ...mapCommonTransactionProperties(transactionResult),
    type: TransactionType.Payment,
    receiver: payment.receiver,
    amount: microAlgos(payment.amount),
    ...(payment.closeRemainderTo
      ? {
          subType: PaymentTransactionSubType.AccountClose,
          closeRemainder: {
            to: payment.closeRemainderTo,
            amount: microAlgos(payment.closeAmount ?? 0n),
          },
        }
      : {
          subType: undefined,
          closeRemainder: undefined,
        }),
  } satisfies BasePaymentTransaction
}

export const asPaymentTransaction = (transactionResult: TransactionResult): PaymentTransaction => {
  return {
    id: transactionResult.id,
    ...mapCommonPaymentTransactionProperties(transactionResult),
  }
}

export const asInnerPaymentTransaction = (
  networkTransactionId: string,
  index: string,
  transactionResult: TransactionResult
): InnerPaymentTransaction => {
  return {
    ...asInnerTransactionId(networkTransactionId, index),
    ...mapCommonPaymentTransactionProperties(transactionResult),
  }
}
