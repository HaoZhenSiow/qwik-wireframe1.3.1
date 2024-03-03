import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(({ href }: {
  href?: string
}) => {
  useStylesScoped$(`
    a {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      text-wrap: nowrap;
    }
  `)
  return (
    <a href={href}><Slot /></a>
  )
})