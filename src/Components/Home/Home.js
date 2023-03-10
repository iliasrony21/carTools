import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Products from './Products'
import ServiceTitle from './ServiceTitle'
import PartsNeed from './PartsNeed'
import FlashDeal from './FlashDeal'
import FeaturedCategories from './FeaturedCategories'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceTitle></ServiceTitle>
      <Products></Products>
      <PartsNeed></PartsNeed>
      <FeaturedCategories></FeaturedCategories>
      <FlashDeal></FlashDeal>
    </div>
  )
}

export default Home
