import { type Signal, component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export default component$(({ navItems, isMenuActive }:{
  navItems: string[],
  isMenuActive: Signal<boolean>
}) => {
  useStylesScoped$(`
    .menu {
      pointer-events: none;
      line-height: 0;
      width: 100%;
      overflow-x: hidden;
      z-index: 99;
      position: fixed;
      top: 0;
      left: 0;
    }

    nav {
      background-color: grey;
      line-height: 0;
      height: 100vh;
      overflow-y: scroll;
      transform: translateX(100%);
      transition: transform 0.5s ease;

      padding-top: 8em;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    p {
      font-weight: bold;
      font-size: 1.5em;
      font-family: var(--heading-font);
    }

    .menu.active {
      display: block;
      pointer-events: auto;

      & > nav {
        transform: translateX(0);
      }
    }

    @media (width > 950px) {
      .menu.active {
        display: none;
      }
    }
  `)

  return (
    <div class={{ menu: true, active: isMenuActive.value }}>
      <nav class="fluid-container">
        <ul>
          {navItems.map((el, idx) => (
            <li key={idx}>
              <Link
                href={`/interior-design/${el.toLowerCase()}`}
                onClick$={() => isMenuActive.value = false} >
                <p>{el}</p>
              </Link>
            </li>
          ))}   
        </ul>
      </nav>
    </div>
  )
})