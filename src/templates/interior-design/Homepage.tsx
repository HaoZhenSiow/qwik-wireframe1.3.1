import { component$ } from '@builder.io/qwik'

import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'
import LogoMarquee from '~/components/awards/LogoMarquee'
import Feature1 from '~/components/feature/Feature1'
import Feature2 from '~/components/feature/Feature2'
import Portfolio1 from '~/components/portfolio/portfolio1/Portfolio1'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
        <Feature1 />
        <Feature2 />
        <Portfolio1 />
      </main>
    </>
  )
})