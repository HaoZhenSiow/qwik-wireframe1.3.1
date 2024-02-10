import { component$, useStylesScoped$ } from "@builder.io/qwik"
import Img from "../utils/optimization/Img"

export default component$(() => {
  useStylesScoped$(`
    section {
      text-align: center;
    }

    h2, p { text-align: left; }

    h3 {
      margin-top: 2em;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1em;
      margin-top: 1em;

      @media (width > 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    button {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
      margin-inline: auto;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>Life @ Swiss</h2>
      <p>At Swiss Interior, we believe in the constant upgrading of skills and design. We partner with other leading brands within and beyond the interior design industry to keep our interior designers in trend and updated with the latest designs, products and styles</p>
      <div class="gallery">
        <Img src="/trip/1" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/2" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/3" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/4" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/5" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/6" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/7" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/8" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/9" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/10" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/11" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
        <Img src="/trip/12" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" />
      </div>
      <h3>D & D 2023</h3>
      <div class="gallery">
        <Img src="/D&D/1" sizes={['183.075px', '323.725px', '388.025px']} width={400} height={400} alt="D&D training" />
        <Img src="/D&D/2" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/3" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/4" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/5" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/6" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/7" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/8" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/9" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/10" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/11" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/12" sizes={['183.075px', '323.725px', '388.025px']} width={400} height={400} alt="D&D training" />
        <Img src="/D&D/13" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/14" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/15" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/16" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/17" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/18" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/19" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/20" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/21" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/22" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/23" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
        <Img src="/D&D/24" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="D&D training" />
      </div>
      <h3>GFA Training</h3>
      <div class="gallery">
        <Img src="/GFA/1" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/2" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/3" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/4" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/5" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/6" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/7" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/8" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/9" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/10" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/11" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/12" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/13" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/14" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/15" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/16" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/17" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/18" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/19" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/20" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/21" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/22" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/23" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
        <Img src="/GFA/24" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="GFA training" />
      </div>
      <button type="button">Join Us!</button>
    </section>
  )
})