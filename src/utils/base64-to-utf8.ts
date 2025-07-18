import { Buffer } from 'buffer'
import isUtf8 from 'isutf8'

export const base64ToUtf8 = (log: string) => {
  return Buffer.from(log, 'base64').toString('utf-8')
}

// Regex to detect any non-printable characters (control chars, null bytes, etc.)
const hasNonPrintableCharacterRegex = /[\p{Cc}\p{Cn}\p{Cs}]/u

export const base64ToUtf8IfValid = (base64: string) => {
  const buf = Buffer.from(base64, 'base64')
  if (isUtf8(buf)) {
    const decoded = buf.toString('utf-8')
    if (!hasNonPrintableCharacterRegex.test(decoded)) {
      return decoded
    }
  }
  return base64
}
