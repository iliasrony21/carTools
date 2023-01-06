import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Products from './Products'
import ServiceTitle from './ServiceTitle'
import PartsNeed from './PartsNeed'
import FlashDeal from './FlashDeal'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ServiceTitle></ServiceTitle>
      <Products></Products>
      <PartsNeed></PartsNeed>
      <FlashDeal></FlashDeal>
    </div>
  )
}

export default Home
