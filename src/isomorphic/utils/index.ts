import parseFormData from './parseFormData'
import lockScroll from './lockScroll'
import unlockScroll from './unlockScroll'
import getScreenInfo from './getScreenInfo'

// todo
function addZero(num) {
  let numStrWithZero

  if (num < 10) {
    numStrWithZero = '0' + num.toString()
  } else {
    numStrWithZero = num.toString()
  }

  return numStrWithZero
}

// todo
function getTime() {
  const d = new Date()
  const time = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]

  return time.map(t => {
    return addZero(t)
  }).join('')
}

export default {
  parseFormData,
  lockScroll,
  unlockScroll,
  getScreenInfo
}
