import { Slot, component$,useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(`
    .elements {
      width: 90%;
      display: grid;
      gap: 1.5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        width: 100%;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `)

  return (
    <div class="elements">
      <Slot />
    </div>
  )
})