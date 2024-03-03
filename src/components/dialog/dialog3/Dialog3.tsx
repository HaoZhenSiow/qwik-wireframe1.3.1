import { type Signal, type QRL, $, component$, useStylesScoped$, useOnDocument, useOn } from '@builder.io/qwik'
import Header3 from '~/components/header/header3/Header3';

export default component$(({ dialogRef }: {
  dialogRef: Signal<HTMLDialogElement | undefined>,
}) => {
  useStylesScoped$(`
    dialog {
      width: 100vw;
      height: 100vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
    }

    svg {
      font-size: 3em;
      cursor: pointer;
      position: sticky;
      top: 0%;
      left: 100%;
    }

    .fluid-section {
      padding-top: 0;
    }

    .visual {
      width: 100%;
      aspect-ratio: 3/2;
      background-color: #525252;
      border-radius: 10px;
      margin-top: 4em;
      margin-bottom: 1em;
    }
  `)

  const dialogElement = dialogRef.value as HTMLDialogElement

  const closeDialog = $(() => {
    dialogElement.close()
  })

  useOnDocument('click', $(e => {
    const clickX = e.clientX,
          clickY = e.clientY

    const { left, top, right, bottom }: DOMRect = dialogElement.getBoundingClientRect()

    if (clickX < left || clickX > right || clickY < top || clickY > bottom) {
      dialogElement.close()
    }
  }))

  useOn('show', $(() => {
    dialogElement.scrollTop = 0
  }))

  return (
    <dialog ref={dialogRef}>
      <Cross closeDialog={closeDialog}/>
      <Header3 />
      <div class="fluid-section">
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
        <div class="visual"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iusto nam accusamus animi molestiae esse deserunt. Sapiente, provident. Sequi incidunt laboriosam quisquam? Beatae fugiat voluptatum, et optio sapiente cupiditate saepe?</p>
      </div>
    </dialog>
  )
})

function Cross({ closeDialog }: {
  closeDialog: QRL<() => void>
}) {
  return (
    <svg
      onClick$={closeDialog} 
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256z" />
    </svg>
  )
}