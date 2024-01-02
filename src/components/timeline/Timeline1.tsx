import { type QRL, $, component$, useStylesScoped$, useStore, useSignal, useOnWindow } from "@builder.io/qwik"
import fluid from "~/lib/fluid"
import _ from 'lodash'

export default component$(() => {
  useStylesScoped$(`
    .timeline {
      display: flex;
      flex-direction: row;
      column-gap: ${fluid(20, 40, 350, 1440)};
    }

    .timeline-year {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    .timeline-year b {
      font-size: ${fluid(20, 27, 350, 1440)};
      line-height: 1;
      text-align: right;
    }

    .line {
      width: 2px;
      height: 300px;
      margin-block: 1em;
      background-color: black;
    }

    .timeline-content {
      max-width: calc(var(--fluid-h5) * 38.125);
      align-self: start;
      position: -webkit-sticky;
      position: sticky;
      top: 150px;
    }
  `)

  const timelineRef = useSignal<HTMLElement>()

  interface ContentDisplay { 
    [key: string]: boolean | QRL<(this: ContentDisplay) => void>;
    reset: QRL<(this: ContentDisplay) => void>;
  }

  const contentDisplay = useStore<ContentDisplay>({
    '2015': true,
    '2017': false,
    '2020': false,
    '2023': false,
    'Our Future': false,
    reset: $(function (this: ContentDisplay) {
      this['2015'] = false
      this['2017'] = false
      this['2020'] = false
      this['2023'] = false
      this['Our Future'] = false
    })
  })

  const windowScroll = $(function () {
    const timeline = timelineRef.value!
    const years = timeline.querySelectorAll('b')
    const allPosY = [...years].map(year => getPosY(year))
    const closestIdx = findIndexClosestToValue(allPosY, 150)
    const closestYear = years[closestIdx].dataset.year!
    const closestYearPosY = getPosY(years[closestIdx])
    if (contentDisplay[closestYear] === true) return
    if (closestYearPosY > 150) return
    contentDisplay.reset()
    contentDisplay[closestYear] = true
  })

  useOnWindow('scroll', windowScroll)

  return (
    <section class="fluid-section">
      <h2>Our Journey Towards Creating Beautiful Spaces</h2>
      <div class="timeline">
        <div class="timeline-year" ref={timelineRef}>
          <b data-year="2015">2015</b>
          <div class="line"/>
          <b data-year="2017">2017</b>
          <div class="line"/>
          <b data-year="2020">2020</b>
          <div class="line"/>
          <b data-year="2023">2023</b>
          <div class="line"/>
          <b data-year="Our Future">Our Future</b>
          <div class="line"/>
        </div>
        <div class="timeline-content">
          {
            contentDisplay[2015] && (
              <>
                <h3>2015 Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet quod, nostrum nihil necessitatibus voluptatibus earum obcaecati quisquam odio, cumque ratione nulla tempore nobis, doloribus itaque. Eos suscipit deleniti dolore.</p>
              </>
            )
          }
          {
            contentDisplay[2017] && (
              <>
                <h3>2017 Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet quod, nostrum nihil necessitatibus voluptatibus earum obcaecati quisquam odio, cumque ratione nulla tempore nobis, doloribus itaque. Eos suscipit deleniti dolore.</p>
              </>
            )
          }
          {
            contentDisplay[2020] && (
              <>
                <h3>2020 Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet quod, nostrum nihil necessitatibus voluptatibus earum obcaecati quisquam odio, cumque ratione nulla tempore nobis, doloribus itaque. Eos suscipit deleniti dolore.</p>
              </>
            )
          }
          {
            contentDisplay[2023] && (
              <>
                <h3>2023 Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet quod, nostrum nihil necessitatibus voluptatibus earum obcaecati quisquam odio, cumque ratione nulla tempore nobis, doloribus itaque. Eos suscipit deleniti dolore.</p>
              </>
            )
          }
          {
            contentDisplay['Our Future'] && (
              <>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet quod, nostrum nihil necessitatibus voluptatibus earum obcaecati quisquam odio, cumque ratione nulla tempore nobis, doloribus itaque. Eos suscipit deleniti dolore.</p>
              </>
            )
          }
        </div>
      </div>
    </section>
  )
})

function findIndexClosestToValue(array: number[], targetValue: number): number {
  const closestVal = _.minBy(array, value => Math.abs(value - targetValue))!
  return array.indexOf(closestVal)
}

function getPosY(element: HTMLElement): number {
  return element.getBoundingClientRect().y
}