import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

export default component$(() => {
  useStylesScoped$(`
    header {
      margin-top: ${fluid(150, 200, 350, 1440)};
    }

    .services {
      display: flex;
      flex-direction: column;
      gap: 1em;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      @media (width >= 650px) {
        flex-direction: row;
      }
    }

    h1 {
      margin-bottom: 2.5em;
    }

    h2 {
      margin-top: 1em;
      margin-bottom: .5em;
    }

    .visual {
      width: 250px;
      aspect-ratio: 1;
      background-color: #525252;
      border-radius: 10px;
    }
    
  `)
  return (
    <header class="fluid-header">
      <h1>Our Services</h1>
      <div class="services">
        <div>
          <div class="visual" />
          <h2>Residential Renovation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis id soluta laboriosam architecto doloremque quisquam aliquam, nam iusto error quasi aperiam nesciunt quod. Illum corrupti ut corporis assumenda eligendi?</p>
        </div>
        <div>
          <div class="visual" />
          <h2>Commercial Renovation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex deleniti. Beatae, aspernatur unde. Fuga, cumque dignissimos aut ea accusamus nulla tenetur in tempore quo cum fugit quibusdam voluptates. Inventore!</p>
        </div>
      </div>
    </header>
  )
})