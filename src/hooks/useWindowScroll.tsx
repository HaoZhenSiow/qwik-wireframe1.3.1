import { $, useOnWindow, useStore } from "@builder.io/qwik"

export default function useWindowScroll() {
  const scrollInfo = useStore({
    currentScrollTop: 0,
    lastScrollTop: 0,
    direction: '',
    scrolled: false
  })

  const handleWindowScroll = $(function () {
    scrollInfo.currentScrollTop = document.documentElement.scrollTop
    if (scrollInfo.currentScrollTop > scrollInfo.lastScrollTop) {
      scrollInfo.direction = 'scrolled-down'
    } else {
      scrollInfo.direction = 'scrolled-up'
    }
    scrollInfo.lastScrollTop = scrollInfo.currentScrollTop
    if (scrollInfo.currentScrollTop > 0) {
      scrollInfo.scrolled = true
    } else {
      scrollInfo.scrolled = false
    }
  })

  useOnWindow('scroll', handleWindowScroll)

  return scrollInfo
}