import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Contact1 from '~/components/contact/Contact1'
import Faq1 from '~/components/faq/faq1/Faq1'
import Form1 from '~/components/form/Form1'

export default component$(() => {
  return (
    <main>
      <Contact1 />
      <Faq1 />
      <Form1 />
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