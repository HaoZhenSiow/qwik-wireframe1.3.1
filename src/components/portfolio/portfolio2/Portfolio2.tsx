import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik'
import fluid from '~/lib/fluid'

import DisplayBy3 from '~/components/display/DisplayBy3'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: ${fluid(150, 200, 350, 1440)};
    }

    h1 {
      align-self: start;
      margin-bottom: 2.5em;
    }

    .filter {
      align-self: start;
      margin-bottom: 1.5em;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 1em;

      > select {
        font-size: 1.2em;
        padding: .25em .5em;
      }
    }
  `)
  return (
    <section class="fluid-section" aria-label="portfolio">
      <h1>Outstanding Work and Nothing Less.</h1>
      <div class="filter">
        <select name="" id="">
          <option value="">Property Type</option>
          <option value="">HDB</option>
          <option value="">BTO</option>
          <option value="">Condo</option>
          <option value="">Landed</option>
          <option value="">Office</option>
          <option value="">Commercial</option>
        </select>
        <select name="" id="">
          <option value="">Rooms</option>
          <option value="">2 Rooms</option>
          <option value="">3 Rooms</option>
          <option value="">4 Rooms</option>
          <option value="">5 Rooms</option>
        </select>
        <select name="" id="">
          <option value="">Style</option>
          <option value="">Modern Dark</option>
          <option value="">Contemporary White</option>
          <option value="">Executive Maisonette</option>
          <option value="">Scandinavian</option>
          <option value="">Japandi</option>
        </select>
      </div>
      <DisplayBy3>
        <Slot />
      </DisplayBy3>
    </section>
  )
})