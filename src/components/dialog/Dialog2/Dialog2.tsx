// insert the below codes ibto the parebt component
// const targetSig = useSignal<number | null>(null)
// const dialogRef = useSignal<HTMLDialogElement>()
// const dialogElement = dialogRef.value as HTMLDialogElement
// const showDialog = $((target: number) => {
//   targetSig.value = target
//   dialogElement.showModal()
// })

import { type QRL, type Signal, Slot, $, component$, useStylesScoped$, useOnDocument } from '@builder.io/qwik'

export default component$(({ dialogRef, targetSig }: {
  dialogRef: Signal<HTMLDialogElement | undefined>,
  targetSig: Signal<number | null>
}) => {
  useStylesScoped$(`
    dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
    }

    dialog > div {
      line-height: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      @media (orientation: landscape) {
        flex-direction: row;
      }
    }

    img {
      cursor: default;
      width: 90vw;
      height: auto;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;

      @media (orientation: landscape) {
        width: auto;
        height: 80vh;
      }
    }

    svg {
      color: white;
      background-color: white;
      border-radius: 10px;
      padding-inline: 10px;
      color: rgb(91 91 91);
      font-size: 40px;
      opacity: 0.6;
      cursor: pointer;
    }

    dialog > div > svg {
      display: none;

      @media (orientation: landscape) {
        display: block;
      }
    }

    .arrows {
      width: 90%;
      display: flex;
      justify-content: space-between;

      @media (orientation: landscape) {
        display: none;
      }
    }
  `)

  const dialogElement = dialogRef.value as HTMLDialogElement

  useOnDocument('click', $(e => {
    const clickX = e.clientX,
          clickY = e.clientY

    const { left, top, right, bottom }: DOMRect = dialogElement.getBoundingClientRect()

    if (clickX < left || clickX > right || clickY < top || clickY > bottom) {
      dialogElement.close()
    }
  }))

  const moveLeft = $(() => {
    if (!targetSig.value) return
    if (targetSig.value === 1) {
      targetSig.value = 12
      return
    }
    targetSig.value = targetSig.value - 1
  })
  const moveRight = $(() => {
    if (!targetSig.value) return
    if (targetSig.value === 12) {
      targetSig.value = 1
      return
    }
    targetSig.value = targetSig.value + 1
  })

  return (
    <dialog ref={dialogRef}>
      <div>
        <ArrowLeft callback={moveLeft} />
        <Slot />
        <ArrowRight callback={moveRight} />
        <div class="arrows">
          <ArrowLeft callback={moveLeft} />
          <ArrowRight callback={moveRight} />
        </div>
      </div>
    </dialog>
  )
})

function ArrowLeft({ callback }: { callback: QRL<() => void> }) {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick$={callback}><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
  )
}

function ArrowRight({ callback }: { callback: QRL<() => void> }) {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick$={callback}><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
  )
}