import { component$ } from '@builder.io/qwik'

import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'
import LogoMarquee from '~/components/awards/LogoMarquee'
import Feature1 from '~/components/feature/feature1'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
        <Feature1 />
      </main>
    </>
  )
})