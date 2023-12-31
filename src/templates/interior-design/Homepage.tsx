import { component$ } from '@builder.io/qwik'

import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'
import LogoMarquee from '~/components/awards/LogoMarquee'
import Feature1 from '~/components/feature/Feature1'
import Feature2 from '~/components/feature/Feature2'
import Portfolio1 from '~/components/portfolio/portfolio1/Portfolio1'
import Testimonials1 from '~/components/testimonials/testimonial1/Testimonials1'
import FoundersNote1 from '~/components/FoundersNote/FoundersNote1'
import Faq1 from '~/components/faq/faq1/Faq1'
import Form1 from '~/components/form/Form1'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
        <Feature1 />
        <Feature2 />
        <Portfolio1 />
        <Testimonials1 />
        <Faq1 />
        <Form1 />
        <FoundersNote1 />
      </main>
    </>
  )
})