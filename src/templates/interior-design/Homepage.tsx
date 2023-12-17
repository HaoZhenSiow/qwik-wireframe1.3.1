import { component$ } from '@builder.io/qwik'

import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'
import LogoMarquee from '~/components/awards/LogoMarquee'
import Feature2 from '~/components/feature/Feature2'
import Feature3 from '~/components/feature/Feature3'
import Portfolio1 from '~/components/portfolio/portfolio1/Portfolio1'
import Testimonials1 from '~/components/testimonials/testimonial1/Testimonials1'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
        <Feature3 />
        <Feature2 />
        <Portfolio1 />
        <Testimonials1 />
      </main>
    </>
  )
})