import crypto from 'crypto'
/**
 * source:
 * http://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
 */

export default function computeHash(buffer: string) {
  const shasum = crypto.createHash('sha1')
  shasum.update(buffer)
  return shasum.digest('hex')
}
