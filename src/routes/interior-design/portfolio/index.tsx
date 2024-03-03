import { component$ } from '@builder.io/qwik'

import Portfolio2 from '~/components/portfolio/portfolio2/Portfolio2'
import InteriorDesign from '~/components/portfolio/themes/interior-design/InteriorDesign'
import Form1 from '~/components/form/Form1'

export default component$(() => {
  return (
    <main>
      <Portfolio2>
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
        <InteriorDesign />
      </Portfolio2>
      <Form1 />
    </main>
  )
})