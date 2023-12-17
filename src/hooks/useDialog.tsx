import { $, useSignal, useOnDocument } from "@builder.io/qwik"

export default function useDialog() {
  const dialogRef = useSignal<HTMLDialogElement>()

  const showDialog = $(() => {
    dialogRef.value?.showModal()
  })

  useOnDocument('load', $(() => {
    const dialogElement = dialogRef.value as HTMLDialogElement
    dialogElement.addEventListener('click', (e) => {
      const clickX = e.clientX,
            clickY = e.clientY

      const { left, top, right, bottom }: DOMRect = dialogElement.getBoundingClientRect()

      if (clickX < left || clickX > right || clickY < top || clickY > bottom) {
        dialogElement.close()
      }
    })
  }))

  return { dialogRef, showDialog }
}