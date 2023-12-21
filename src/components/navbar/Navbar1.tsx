import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import useWindowScroll from '~/hooks/useWindowScroll'

import Nav1 from './nav/Nav1'
import Hamburger1 from './hamburger/Hamburger1'


export default component$(() => {
  useStylesScoped$(createStyle())
  
  const scroll = useWindowScroll()

  return (
    <div class={["navbar", scroll.value > 0 && "scrolled"]}>
      <div class="fluid-container">
        <Link href="/" prefetch>
          <p class="navbar__logo">LOGO</p>
        </Link>
        <Nav1 />
        <Hamburger1 />
      </div>
    </div>
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
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      transition: padding .5s ease-in-out;
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
    }

    .navbar.scrolled .navbar__logo {
      font-size: var(--logo-fs-scrolled);
    }
  `
}