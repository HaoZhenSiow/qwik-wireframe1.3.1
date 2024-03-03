import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

export default component$(() => {
  useStylesScoped$(`
    section {
      padding-top: ${fluid(150, 200, 350, 1440)};
    }

    .contact {
      display: flex;
      flex-direction: column-reverse;
      gap: 1em;

      @media (width >= 1000px) {
        flex-direction: row;
        gap: 3em;
      }
    }

    h1 {
      margin-bottom: 1em;
    }

    p { max-width: 38.125em; }

    .address {
      line-height: 1.3;
      margin-top: .25em;
    }

    .map {
      width: 100%;
      aspect-ratio: 16/9;
      background-color: #525252;
      align-self: center;
    }

    .contact-info {
      flex-shrink: 0;

      @media (width >= 1000px) {
        width: 50%;
      }
    }

    b {
      margin-top: 1em;
      display: block;
    }
  `)
  return (
    <section class="fluid-section">
      <div class="contact">
        <div class="contact-info">
          <h1>Get In Touch</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, reprehenderit quos! Similique minus, error illum, sequi ea impedit adipisci quae, sit delectus earum temporibus eaque minima distinctio sint quis? Quod?</p>
          <b>Location</b>
          <p class="address">10 Ubi Crescent #01-63A Lobby D<br /> Ubi Techpark Singapore 408564</p>
          <b>Phone</b>
          <p>+65 80449593</p>
          <b>Email</b>
          <p>sales@ft2.com.sg</p>
        </div>
        <div class="map"></div>
      </div>
    </section>
  )
})