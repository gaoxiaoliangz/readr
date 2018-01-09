import padNumberWithZero from './padNumberWithZero'

export default function getCurrentTime() {
  const d = new Date()
  const time = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]

  return time.map(t => {
    return padNumberWithZero(t)
  }).join('')
}
