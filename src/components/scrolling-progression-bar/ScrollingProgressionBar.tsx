import { $, component$, useOnDocument, useSignal, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    div {
      background-color: #d3d3d3;
      width: 100%;
      height: 5px;
      position: fixed;
      top: 0;
      z-index: 101;
    }

    div::before {
      content: '';
      display: inline-block;
      width: var(--scroll-progress);
      height: 5px;
      background-color: black;
      position: absolute;
    }
  `)

  const myRef = useSignal<HTMLDivElement>();

  useOnDocument('scroll', $(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    const multiplier = document.documentElement.scrollTop/(body.clientHeight - innerHeight)
    const scale = (multiplier * 100) + '%'
    myRef.value!.style.setProperty('--scroll-progress', scale)
    // document.documentElement.style.setProperty('--scroll-progress', scale);
  }))

  return (
    <div ref={myRef}/>
  )
})