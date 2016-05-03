export function getBookView() {
  let aspectRatio = 7/9

  if(window.innerWidth <= 540) {
    return {
      screen: 'phone',
      pageWidth: window.innerWidth,
      pageHeight: window.innerWidth/aspectRatio
    }
  }else{
    return {
      screen: 'hd',
      pageWidth: 700,
      pageHeight: 700/aspectRatio
    }
  }
}

export function lockScroll(){
  document.body.style.overflow = 'hidden'
}

export function unlockScroll(){
  document.body.style.overflow = 'visible'
}
