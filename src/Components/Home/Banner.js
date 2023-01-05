import React from 'react'
import bannerimage from '../../images/banner.png'

const Banner = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={bannerimage} className='ml-32' />
          <div className='ml-[-50px] mt-[-50px]'>
            <p className=' text-white text-2xl'>NEW TECHNOLOGY & BUILD</p>
            <h1 className='text-6xl font-bold text-white  my-5'>
              LATEST & POWERFUL <br /> ENGINE FOR YOU
            </h1>

            <button className='btn btn-primary w-44'>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
