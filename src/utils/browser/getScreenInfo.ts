export default function getScreenInfo(): {
  view: any
  screen: any
} {
  if (typeof window === 'undefined') {
    console.error('window is undefined, empty info object will be returned!')

    return {
      view: {},
      screen: {}
    }
  }

  return {
    view: {
      width:  window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight
    },
    screen: window.screen
  }
}
