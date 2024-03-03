import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Form1 from '~/components/form/Form1'
import Gallery2 from '~/components/gallery/gallery2/Gallery2'
import Header3 from '~/components/header/header3/Header3'

export default component$(() => {
  return (
    <>
      <Header3 />
      <main>
        <Gallery2 />
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