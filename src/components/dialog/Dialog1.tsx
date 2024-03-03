// insert the below codes ibto the parebt component
// const dialogRef = useSignal<HTMLDialogElement>()
// const dialogEl = dialogRef.value as HTMLDialogElement
// const showDialog = $(() => dialogEl.showModal())


import { type Signal, Slot, component$, $, useOnDocument, useStylesScoped$ } from '@builder.io/qwik'

export default component$(({ dialogRef }: {
  dialogRef: Signal<HTMLDialogElement | undefined>,
}) => {

  useStylesScoped$(`
    dialog {
      width: 80%;
      max-width: 40.125em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 3em 2em;

      > p {
        color: red;
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

  return (
    <dialog ref={dialogRef}>
      <Slot />
    </dialog>
  )
})