export default function padNumberWithZero(num) {
  let numStrWithZero

  if (num < 10) {
    numStrWithZero = '0' + num.toString()
  } else {
    numStrWithZero = num.toString()
  }

  return numStrWithZero
}
