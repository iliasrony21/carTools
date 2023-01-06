import React from 'react'
import engine from '../../images/slider-2-1.png'

const FlashDeal = () => {
  return (
    <div className='flex mt-40 mb-32'>
      <div className='part-one'>
        <img src={engine} className='w-full h-96 ml-10' alt='' />
      </div>
      <div className='part-two ml-32 '>
        <h1 className='text-5xl text-black font-bold ml-32'>FLASH DEALS</h1>
        <br />
        <p className='text-3xl text-black font-bold'>
          HURRY UP AND GET 25% DISCOUNT
        </p>
        <button className='btn btn-secondary ml-40 mt-7 mb-10'>
          ADD TO CART
        </button>
        <div className='grid grid-flow-col gap-5 text-center auto-cols-max ml-20'>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>
              <span style={{ '--value': 15 }}></span>
            </span>
            days
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>
              <span style={{ '--value': 10 }}></span>
            </span>
            hours
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>
              <span style={{ '--value': 24 }}></span>
            </span>
            min
          </div>
          <div className='flex flex-col'>
            <span className='countdown font-mono text-5xl'>
              <span style={{ '--value': 45 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashDeal
