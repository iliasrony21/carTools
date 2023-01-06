import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Products from './Products'
import ServiceTitle from './ServiceTitle'
import PartsNeed from './PartsNeed'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ServiceTitle></ServiceTitle>
      <Products></Products>
      <PartsNeed></PartsNeed>
    </div>
  )
}

export default Home
