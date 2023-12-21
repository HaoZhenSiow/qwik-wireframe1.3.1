import { $, useOnWindow, useSignal } from "@builder.io/qwik"

export default function useWindowScroll() {
  const scroll = useSignal(0)

  const handleWindowScroll = $(function () {
    scroll.value = document.documentElement.scrollTop
  })

  useOnWindow('scroll', handleWindowScroll)

  return scroll
}