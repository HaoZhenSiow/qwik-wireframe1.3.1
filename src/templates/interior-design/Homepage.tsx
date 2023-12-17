import { component$ } from '@builder.io/qwik'
import DoubleMarqueeHero from '~/components/hero/DoubleMarqueeHero/DoubleMarqueeHero'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <p>This is a homepage</p>
    </>
  )
})