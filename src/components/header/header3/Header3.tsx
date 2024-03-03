import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

export default component$(() => {
  useStylesScoped$(`
    header {
      // margin-top: ${fluid(150, 200, 350, 1440)};
      display: flex;
      flex-direction: column;
      
      
      @media (width >= 1000px) {
        flex-direction: row;
      }

    }

    h1 {
      font-size: calc(var(--fluid-lg) * 1.2);
      margin-bottom: .5em;

      @media (width >= 1000px) {
        margin-bottom: .25em;
        margin-right: 1em;
      }
    }

    .project-detail {
      flex-shrink: 0;
    }

    .project-desc {
      max-width: 38.125em;
      flex-shrink: 1;
    }

    p {
      margin-bottom: 1em;
    }

    .project-detail > *:not(h1) {
      margin-bottom: .5em;
    }

    .specs {
      display: flex;
      gap: 2em;
    }

    .specs p {
      display: flex;
      align-items: center;
    }

    .bedIcon, .bathtubIcon {
      margin-right: .2em;
    }
  `)
  return (
    <header class="fluid-header">
      <div class="project-detail">
        <h1>513 The Calrose</h1>
        <p>513 Tio Chu Kang Road, Singapore 787066</p>
        <p>Project Cost: S$49,000</p>
        <p>Property Type: Condo</p>
        <p>Style: Scandinavian</p>
        <div class="specs">
          <p>
            <svg height="1em" width="1em" viewBox="0 0 512 512" stroke="currentColor" class="bedIcon">
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112" />
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16m0 0v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16" />
            </svg>
            3
          </p>
          <p>
            <svg width="1em" height="1em" viewBox="0 0 256 256" stroke="currentColor" class="bathtubIcon">
              <path d="M232,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H24A16,16,0,0,0,8,112v32a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V112A16,16,0,0,0,232,96Zm-40,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z" />
            </svg>
            2
          </p>
          <p>
            <svg height="1em" width="1em" viewBox="0 0 32 32" stroke="currentColor" >
              <path d="M 4 4 L 4 28 L 28 28 L 28 19 L 13 19 L 13 18 L 13 16 L 13 14 L 13 12 L 13 10 L 13 8 L 13 4 L 4 4 z M 6 6 L 11 6 L 11 8 L 8 8 L 8 10 L 11 10 L 11 12 L 8 12 L 8 14 L 11 14 L 11 16 L 8 16 L 8 18 L 11 18 L 11 19.585938 L 6 24.585938 L 6 6 z M 12.414062 21 L 14 21 L 14 24 L 16 24 L 16 21 L 18 21 L 18 24 L 20 24 L 20 21 L 22 21 L 22 24 L 24 24 L 24 21 L 26 21 L 26 26 L 7.4140625 26 L 12.414062 21 z" />
            </svg>
            1300 sqft
          </p>
        </div>
      </div>
      <div class="project-desc">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla praesentium explicabo quaerat repellendus placeat illo, quo, similique quas obcaecati sunt earum dignissimos magnam unde nihil, officia ex tenetur nemo repellat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, impedit praesentium quia quae magnam natus earum odit necessitatibus deserunt minus commodi quidem in totam iusto inventore distinctio error voluptates? Fugiat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut aliquid accusamus, sit natus nostrum perferendis, consequatur earum dolores ipsa sint, inventore porro? Eum, temporibus cupiditate alias facilis illo magnam!</p>
      </div>
    </header>
  )
})