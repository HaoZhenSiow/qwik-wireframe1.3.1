import { component$ } from '@builder.io/qwik'

import Header1 from '~/components/header/Header1/Header1'
import Story from './modified-components/Story'
import Awards1 from '~/components/awards/Awards1'
import CoerValues1 from '~/components/core-values/CoerValues1'
import Timeline1 from '~/components/timeline/Timeline1'
import Team1 from '~/components/team/Team1'

export default component$(() => {
  return (
    <>
      <Header1 />
      <main>
        <Story />
        <Awards1 />
        <CoerValues1 />
        <Timeline1 />
        <Team1 />
      </main>
    </>
  )
})