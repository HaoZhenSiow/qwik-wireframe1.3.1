import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    h2 {
      margin-top: 1.5em;
      margin-bottom: 1em;
    }

    br { display: none; }

    p {
      max-width: 38.125em;
      margin-block: 1.5em;
    }

    li { margin-bottom: .5em; }

    .visual {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 3/2;
      background-color: #525252;
      border-radius: 10px;
      align-self: center;
    }

    @media (width > 1000px) {
      section { flex-direction: row; }
      h2 { margin-top: 0; }
      br { display: inline; }

      .visual {
        width: 60%;
        margin-left: 3em;
        flex-shrink: 0;
      }

      section.left { flex-direction: row-reverse; }

      .left .visual {
        margin-left: 0;
        margin-right: 3em;
      }
    }
  `)

  const isVisualLeft = false

  return (
    <section class={`fluid-section ${isVisualLeft ? 'left' : ''}`}>
      <div class="copy">
        <h2>A Wonderful Renovation isn&apos;t Just About the Design; It&apos;s About the Whole Renovation Experience</h2>
        <p>With over 20 years of combined experience, we&apos;ve seen it all, and we've helped [X] homeowners bring their dream homes to life. Since each household is unique, what we bring to each project needs to reflect that.</p>
        <p>It isn&apos;t enough just to deliver your dream home — we want you to have a smooth and stress-free renovation experience.</p>
        <p>I bet you've heard about stories of renovation nightmare — the frustrations of delays, questionable work, and unexpected costs. We don&apos;t want you to be the next victim.</p>
        <p>Your Peace of Mind is Our Priority: Direct communication, a dedicated project manager, and regular updates—putting you in control, every step of the way.</p>
        <p>We've got your back, unwaveringly upholding our core values, and providing our clients with an unparalleled renovation experience that's unlike any other in Singapore.</p>
      </div>
      <div class="visual"></div>
    </section>
  )
})