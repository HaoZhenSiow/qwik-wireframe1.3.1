import { component$, useStylesScoped$ } from "@builder.io/qwik"

export default component$(() => {
  useStylesScoped$(`
    .hamburger {
      --width: 3em;
      --color: gray;
      position: relative;
      width: var(--width);
      aspect-ratio: 3/2;
      cursor: pointer;
    }

    .hamburger__bar {
      width: 100%;
      height: 15%;
      border-radius: 10px;
      background-color: var(--color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .hamburger__bar:first-child {
      top: 10%;
    }

    .hamburger__bar:last-child {
      top: 90%;
    }

    @media (width > 950px) {
      .hamburger {
        display: none;
      }
    }
  `)

  return (
    <div class="hamburger">
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
    </div>
  )
})