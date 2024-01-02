import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

const checked = (<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11l3 3l8 -8" stroke-width="3.5"></path><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path></svg>)

export default component$(() => {
  useStylesScoped$(`
    .core-values {
      display: grid;
      gap: 5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .value {
      display: flex;
    }

    svg {
      font-size: ${fluid(30, 35, 350, 1440)};
      flex-shrink: 0;
      transform: translateY(-.15em);

      @media (width >= 650px) {
        transform: translateY(-.1em);
      }
    }

    h3 {
      margin-bottom: .25em;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>The Values that Drive Everything We Do</h2>
      <div class="core-values">
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Creativity</h3>
              <p>We embrace creativity and strive for innovative design solutions, pushing boundaries to deliver unique and inspiring spaces that captivate and delight our clients.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Client-Centric</h3>
              <p>We prioritize understanding our clients' needs, desires, and preferences, ensuring that their vision is the guiding force behind every design decision we make.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Innovation</h3>
              <p>We believe that meticulous attention to detail is crucial in creating exceptional interiors. From the selection of materials to the placement of every object, we ensure that every element is carefully considered and harmoniously integrated.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Quality</h3>
              <p>We are committed to delivering the highest standards of quality and workmanship. We collaborate with skilled craftsmen to create enduring designs that stand the test of time.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Communication</h3>
              <p>We work closely with our clients and have a open and transparent communication, ensuring that they are updated throughout the whole process.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>Integrity</h3>
              <p>We are transparent, honest, and committed to delivering on our promises, fostering trust and long-lasting relationships with our clients.</p>
            </div>
          </div>
        
      </div>
    </section>
  )
})