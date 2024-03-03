// import { component$ } from '@builder.io/qwik'
// import type { DocumentHead } from '@builder.io/qwik-city'


// export default component$(() => {
//   return (
//     <>
//       <h1>Qwik App</h1>
//     </>
//   );
// });

// export const head: DocumentHead = {
//   title: "Welcome to Qwik",
//   meta: [
//     {
//       name: "description",
//       content: "Qwik site description",
//     },
//   ],
// };

import type { RequestEvent } from '@builder.io/qwik-city'

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(302, '/interior-design/')
}