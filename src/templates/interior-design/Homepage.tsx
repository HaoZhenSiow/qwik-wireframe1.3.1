import { component$ } from '@builder.io/qwik'
import LogoMarquee from '~/components/awards/LogoMarquee'

import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
      </main>
    </>
  )
})