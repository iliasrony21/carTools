import React from 'react'
import bgcar from '../../images/bg-car.png'

const PartsNeed = () => {
  return (
    <div>
      <div className='text-part bg-[#F1F1F1]'>
        <h1 className='text-center text-5xl font-bold pt-28 pb-5 text-black'>
          ALL KINDS OF PARTS THAT YOU <br />
          NEED CAN FIND HERE
        </h1>
        <button className='btn btn-secondary text-black  ml-[700px] mb-52'>
          SHOP NOW
        </button>
      </div>
      <div className='image-part'>
        <img src={bgcar} className='mt-[-150px] ml-60' alt='' />
      </div>
    </div>
  )
}

export default PartsNeed
