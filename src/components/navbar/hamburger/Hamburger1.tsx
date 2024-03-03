import { type Signal, $, component$, useStylesScoped$, useOn } from "@builder.io/qwik"

export default component$(({ isMenuActive }: {
  isMenuActive: Signal<boolean>
}) => {
  useStylesScoped$(`
    .hamburger {
      --width: 2.5em;
      --color: black;
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
      translate: -50% -50%;
      transition: all 0.5s ease;
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

    .active .hamburger__bar {
      top: 50%;
      transform: rotate(45deg);
    }

    .active .hamburger__bar:last-child {
      top: 50%;
      transform: rotate(-45deg);
    }
  `)

  useOn('click', $(() => {
    isMenuActive.value = !isMenuActive.value
  }))

  return (
    <div class={{ hamburger: true, active: isMenuActive.value }}>
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
      <div class="hamburger__bar"/>
    </div>
  )
})