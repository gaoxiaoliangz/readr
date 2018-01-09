interface ScreenInfo {
  width?: number
  height?: number
  aspectRatio?: number
  _screen: typeof window.screen
}

export default function getScreenInfo(): ScreenInfo {
  if (typeof window === 'undefined') {
    // console.error('window is undefined, empty info object will be returned!')

    return {
      _screen: {} as any
    }
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth / window.innerHeight,
    _screen: window.screen
  }
}
