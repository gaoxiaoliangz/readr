/**
 * 阻止 selector 以外的元素滚动
 * http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element
 */

import $ from 'jquery'

function scrollHandler(ev) {
  const $this = $(this)
  const scrollTop = this.scrollTop
  const scrollHeight = this.scrollHeight
  const height = $this.innerHeight()
  const delta = (ev.type === 'DOMMouseScroll' ?
    ev.originalEvent.detail * -40 :
    ev.originalEvent.wheelDelta)
  const up = delta > 0

  const prevent = () => {
    ev.stopPropagation()
    ev.preventDefault()
    ev.returnValue = false
    return false
  }

  if (!up && -delta > scrollHeight - height - scrollTop) {
    // Scrolling down, but this will take us past the bottom.
    $this.scrollTop(scrollHeight)
    return prevent()
  } else if (up && delta > scrollTop) {
    // Scrolling up, but this will take us past the top.
    $this.scrollTop(0)
    return prevent()
  }
}

export const preventScroll = {
  init: (selector: string) => {
    $(document).on('DOMMouseScroll mousewheel', selector, scrollHandler)
  },
  destroy: (selector: string) => {
    $(document).off('DOMMouseScroll mousewheel', selector, scrollHandler)
  }
}

export function lockScroll() {
  document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  document.body.style.overflow = 'visible'
}
