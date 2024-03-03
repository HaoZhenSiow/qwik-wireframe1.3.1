import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Header2 from '~/components/header/Header2'
import Workflow1 from '~/components/workflow/workflow1/Workflow1'
import Faq1 from '~/components/faq/faq1/Faq1'
import Form1 from '~/components/form/Form1'

export default component$(() => {
  return (
    <>
      <Header2 />
      <main>
        <Workflow1 />
        <Faq1 />
        <Form1 />
      </main>
    </>
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