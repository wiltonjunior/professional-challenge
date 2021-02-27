import React from 'react'

import Banner from './components/Banner'
import About from './components/About'
import Numbers from './components/Numbers'

import StayIn from '@UI/StayIn'
import Container from '@UI/Container'

const Home = (props) => {
  return (
    <Container>
      <Banner />
      <About />
      <Numbers />
      <StayIn />
    </Container>
  )
}

export default Home
