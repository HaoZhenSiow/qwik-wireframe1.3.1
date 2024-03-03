import { component$, useStylesScoped$, useSignal } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import useWindowScroll from '~/hooks/useWindowScroll'

import Nav1 from './nav/Nav1'
import Hamburger1 from './hamburger/Hamburger1'
import Menu1 from '../menu/menu1/Menu1'

const navItems = ['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']

export default component$(() => {
  useStylesScoped$(createStyle())
  
  const scrollInfo = useWindowScroll()
  const isMenuActive = useSignal<boolean>(false)
  return (
    <>
      <div class={["navbar", scrollInfo.scrolled && "scrolled", scrollInfo.direction]}>
        <div class="fluid-container">
          <Link href="/" prefetch onClick$={() => isMenuActive.value = false}>
            <p class="navbar__logo">LOGO</p>
          </Link>
          <Nav1 navItems={navItems} />
          <Hamburger1 isMenuActive={isMenuActive} />
        </div>
      </div>
      <Menu1 navItems={navItems} isMenuActive={isMenuActive} />
    </>
  )
})

function createStyle() {
  return `
    .navbar {
      --navbar-bg: transparent;
      --logo-fs: 3em;
      --navbar-bg-scrolled: white;
      --logo-fs-scrolled: 2.5em;
      background-color: var(--navbar-bg);
      padding-block: 1.5em;
      position: fixed;
      top: 5px;
      left: 0;
      width: 100%;
      z-index: 100;
      transition: padding .5s ease-in-out, transform .5s ease-in-out;
    }

    .fluid-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__logo {
      font-size: var(--logo-fs);
      font-weight: bold;
      line-height: 1;
      transition: font-size .5s ease-in-out;
    }

    .navbar.scrolled {
      background-color: var(--navbar-bg-scrolled);
      padding-block: .4em;

      &:has(.hamburger.active) {
        background-color: var(--navbar-bg);
      }
    }

    .navbar.scrolled .navbar__logo {
      font-size: var(--logo-fs-scrolled);
    }

    .navbar.scrolled-down {
      transform: translateY(-101%);
    }
  `
}