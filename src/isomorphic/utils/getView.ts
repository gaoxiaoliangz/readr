export default function getView() {
  let aspectRatio = 7 / 9

  if (window.innerWidth <= 540) {
    return {
      screen: 'phone',
      pageWidth: window.innerWidth,
      pageHeight: window.innerWidth / aspectRatio
    }
  } else {
    return {
      screen: 'hd',
      pageWidth: 700,
      pageHeight: 700 / aspectRatio
    }
  }
}
