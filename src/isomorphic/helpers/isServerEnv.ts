export default function isServerEnv() {
  return typeof window === 'undefined'
}
