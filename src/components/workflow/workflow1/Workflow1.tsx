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
      white-space: pre;
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
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    reset: $(function (this: ContentDisplay) {
      this.step1 = false
      this.step2 = false
      this.step3 = false
      this.step4 = false
      this.step5 = false
      this.step6 = false
    })
  })

  const windowScroll = $(function () {
    const timeline = timelineRef.value!
    const years = timeline.querySelectorAll('b')
    const posYs = [...years].map(year => getPosY(year))
    const closestIdx = findIndexClosestToValue(posYs, 150)
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
      <h2>What you can expect working with us</h2>
      <div class="timeline">
        <div class="timeline-year" ref={timelineRef}>
          <b data-year="step1">step 1</b>
          <div class="line"/>
          <b data-year="step2">step 2</b>
          <div class="line"/>
          <b data-year="step3">step 3</b>
          <div class="line"/>
          <b data-year="step4">step 4</b>
          <div class="line"/>
          <b data-year="step5">step 5</b>
          <div class="line"/>
          <b data-year="step6">step 6</b>
          <div class="line"/>
        </div>
        <div class="timeline-content">
          {
            contentDisplay.step1 && (
              <>
                <h3>Initial Consultation:</h3>
                <p>This is where our designer gets to know your requirements, preferences, and budget. It's a meeting where you can discuss your project in detail and set the foundation for the work ahead.</p>
              </>
            )
          }
          {
            contentDisplay.step2 && (
              <>
                <h3>Space Planning and Design Conceptualization:</h3>
                <p>The designer will create a design concept and floor plan based on your needs and style preferences. This will give you a clear idea of how the space will be transformed.</p>
              </>
            )
          }
          {
            contentDisplay.step3 && (
              <>
                <h3>Material and Furniture Selection:</h3>
                <p>The designer will assist you in selecting materials, furniture, lighting, and home décor items that align with the design concept and budget.</p>
              </>
            )
          }
          {
            contentDisplay.step4 && (
              <>
                <h3>Project Management and Execution:</h3>
                <p>The designer will manage the project, collaborate with contractors, and ensure that the design is implemented according to the plan, timeline, and budget.</p>
              </>
            )
          }
          {
            contentDisplay.step5 && (
              <>
                <h3>Installation and Styling:</h3>
                <p>This phase involves the installation of furniture, accessories, and decorative items, bringing the design to life.</p>
              </>
            )
          }
          {
            contentDisplay.step6 && (
              <>
                <h3>Final Inspection and Handover:</h3>
                <p>The designer will conduct a final inspection of the project and hand over the completed space to you, ensuring your satisfaction.</p>
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