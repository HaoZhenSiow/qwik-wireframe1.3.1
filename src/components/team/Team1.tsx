import { component$, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    .team {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1em;
      row-gap: 2em;

      @media (width >= 650px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (width >= 1000px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
    }

    .member {
      // box-shadow: 3px 13px 21px -3px rgba(161,161,161,0.4);
    
    }

    .visual {
      background-color: #525252;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 10px;
    }

    .copy {
      text-align: center;
      padding-block: .25em;
    }

    .copy b {
      font-family: var(--heading-font);
      display: block;
      font-size: 1.5em;
    }

    .copy p {
      line-height: 1;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>Meet Our Team</h2>
      <div class="team">
        <div class="member">
          <div class="visual"></div>
          <div class="copy">
            <b>John Cena</b>
            <p>Senior Designer</p>
            <p>5 years experience</p>
          </div>
        </div>
        <div class="member">
          <div class="visual"></div>
          <div class="copy">
            <b>John Cena</b>
            <p>Senior Designer</p>
            <p>5 years experience</p>
          </div>
        </div>
        <div class="member">
          <div class="visual"></div>
          <div class="copy">
            <b>John Cena</b>
            <p>Senior Designer</p>
            <p>5 years experience</p>
          </div>
        </div>
        <div class="member">
          <div class="visual"></div>
          <div class="copy">
            <b>John Cena</b>
            <p>Senior Designer</p>
            <p>5 years experience</p>
          </div>
        </div>
        <div class="member">
          <div class="visual"></div>
          <div class="copy">
            <b>John Cena</b>
            <p>Senior Designer</p>
            <p>5 years experience</p>
          </div>
        </div>
        
      </div>
    </section>
  )
})