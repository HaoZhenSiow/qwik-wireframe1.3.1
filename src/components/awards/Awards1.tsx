import { component$, useStylesScoped$ } from "@builder.io/qwik";

const logos = ['amazon', 'apple', 'coca-cola', 'google', 'meta', 'microsoft', 'samsung']

export default component$(() => {
  useStylesScoped$(`
    section {
      padding-inline: 0;
    }

    h2 {
      text-align: center;
      font-size: 1.2em;
      margin-top: 0;
    }
    div.logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;
    }

    .logo {
      width: 150px;
      aspect-ratio: 3/2;
      line-height: 0;
      --logo-color: #525252;
      background-color: var(--logo-color);
      -webkit-mask-image: var(--logo-url);
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-image: var(--logo-url);
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>Recognized by industry leaders for exceptional design solutions</h2>
      <div class="logos">
        {logos.map(logo => (
          <div key={logo} class="logo" style={{ "--logo-url": `url('/logo-marquee/${logo}_200.webp')`}} />
        ))}
      </div>
    </section>
  )
})