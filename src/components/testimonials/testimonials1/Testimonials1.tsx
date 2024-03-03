import { component$, useStylesScoped$ } from '@builder.io/qwik'
import _ from 'lodash'

import type { Review } from '../review/Review1'
import Review1 from '../review/Review1'
import DisplayBy3 from '~/components/display/DisplayBy3'
import Button1 from '~/components/button/Button1'

export default component$(({ reviews }: { reviews: Review[] }) => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      align-self: start;
    }

    button {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
    }
  `)

  return (
    <section class="fluid-section" aria-label="testimonials">
      <h2>Don't Take Our Word For It. Hear What Our Customers Say.</h2>
      <DisplayBy3>
        {_.take(reviews, 6).map((review, idx) => (
          <Review1 key={idx} title={review.title} copy={review.copy}/>
        ))}
      </DisplayBy3>
      <Button1 href="/interior-design/testimonials">All Reviews</Button1>
    </section>
  )
})