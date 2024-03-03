import { $, component$,useStylesScoped$, useSignal } from '@builder.io/qwik'

import InteriorDesign from '../themes/interior-design/InteriorDesign'
import DisplayBy3 from '~/components/display/DisplayBy3'
import Button1 from '~/components/button/Button1'
import Dialog3 from '~/components/dialog/dialog3/Dialog3'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      align-self: start;
    }
  `)

  const dialogRef = useSignal<HTMLDialogElement>()
  const dialogEl = dialogRef.value as HTMLDialogElement
  const showDialog = $(() => {
    const event = new Event('show')
    dialogEl.dispatchEvent(event)
    dialogEl.showModal()
  })

  return (
    <section class="fluid-section" aria-label="portfolio">
      <h2>Outstanding Work and Nothing Less</h2>
      <DisplayBy3>
        <InteriorDesign onClick={showDialog}/>
        <InteriorDesign onClick={showDialog}/>
        <InteriorDesign onClick={showDialog}/>
        <InteriorDesign onClick={showDialog}/>
        <InteriorDesign onClick={showDialog}/>
        <InteriorDesign onClick={showDialog}/>
      </DisplayBy3>
      <Button1 href="/interior-design/portfolio">All Projects</Button1>
      <Dialog3 dialogRef={dialogRef} />
    </section>
  )
})