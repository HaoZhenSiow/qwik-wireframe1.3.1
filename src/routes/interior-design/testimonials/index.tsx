import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Testimonials2 from '~/components/testimonials/testimonials2/Testimonials2'
import Form1 from '~/components/form/Form1'

import reviews from './reviews'

export default component$(() => {
  return (
    <main>
      <Testimonials2 reviews={reviews}/>
      <Form1/>
    </main>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
}