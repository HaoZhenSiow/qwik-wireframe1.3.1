import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik"
import Img from "~/components/utils/optimization/Img"
import Dialog2 from "~/components/dialog/Dialog2/Dialog2"

export default component$(() => {
  useStylesScoped$(`
    section {
      text-align: center;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1em;
      margin-top: 1em;

      @media (width > 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    .gallery > img {
      width: 100%;
      height: 100%;
      cursor: pointer;
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
  `)
  const targetSig = useSignal<number | null>(null)
  const dialogRef = useSignal<HTMLDialogElement>()
  const dialogElement = dialogRef.value as HTMLDialogElement
  const showDialog = $((target: number) => {
    targetSig.value = target
    dialogElement.showModal()
  })

  return (
    <section class="fluid-section">
      <div class="gallery">
        <Img src="/trip/1" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(1))} />
        <Img src="/trip/2" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(2))} />
        <Img src="/trip/3" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(3))} />
        <Img src="/trip/4" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(4))} />
        <Img src="/trip/5" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(5))} />
        <Img src="/trip/6" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(6))} />
        <Img src="/trip/7" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(7))} />
        <Img src="/trip/8" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(8))} />
        <Img src="/trip/9" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(9))} />
        <Img src="/trip/10" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(10))} />
        <Img src="/trip/11" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(11))} />
        <Img src="/trip/12" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => showDialog(12))} />
      </div>
      <Dialog2 dialogRef={dialogRef} targetSig={targetSig}>
        <Img src={`/trip/${targetSig.value}`} sizes={['372.95px', '450.55px', '720px']} width={1000} height={1000} alt="company trip" />
      </Dialog2>
    </section>
  )
})