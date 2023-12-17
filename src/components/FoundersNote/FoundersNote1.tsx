import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(`
    h2 { margin-top: 1.5em; }

    .note {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .paragraph, b {
      max-width: 38.125em;
    }

    .paragraph { 
      margin-block: 1.5em;
    }

    .signature {
      font-family: "Comforter", cursive;
      font-size: 2.5em;
      line-height: 1.25;
    }

    .visual {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 3/2;
      background-color: #525252;
      border-radius: 10px;
      align-self: center;
      margin-bottom: 2em;
    }

    @media (width > 1000px) {
      .note { flex-direction: row; }

      .visual {
        width: 60%;
        margin-bottom: 0;
        margin-left: 3em;
      }
    }
  `)

  return (
    <section class="fluid-section">
      <h2>Founder's Note</h2>
      <div class="note">
        <div>
          <b>CASE received a total of 1,300 renovation complaints in 2021, and it was about 2/3 of all the complaints received</b>
          <p class="paragraph">Turning your dream home into a reality should never feel like navigating a minefield. I know it's a major milestone in every Singaporean's life, and it should be a journey filled with excitement, not frustration.</p>
          <p class="paragraph">You see, I've heard the stories - the complaints, the headaches, the worries. Delays, questionable practices, and work that's far from up to par. The renovation journey has had its fair share of bumps in the road for far too long.</p>
          <p class="paragraph">That's why we're here. Our mission: to ensure a smooth, stress-free journey. With a foundation of trust and transparency, we've helped [X] homeowners bring their dream homes to life. We've got your back, and we can't wait to join you on this exciting journey.</p>
          <p class="signature">Johnathon</p>
          <b>Johnathon Tan</b>
          <p>Director of FT2</p>
        </div>
        <div class="visual"></div>
      </div>
    </section>
  )
})