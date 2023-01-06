import React from 'react'
import shipping1 from '../../images/shipping1.webp'
import shipping2 from '../../images/shipping2.webp'
import shipping3 from '../../images/shipping3.webp'
import shipping4 from '../../images/shipping4.webp'

const ServiceTitle = () => {
  const titles = [
    {
      name: 'Free shipping',
      desc: 'Free shipping on all US order',
      img: shipping1
    },
    {
      name: 'Support 24/7',
      desc: 'Contact us 24 hours a day',
      img: shipping2
    },
    {
      name: '100% Money Back',
      desc: 'You have 30 days to Return',
      img: shipping3
    },
    {
      name: 'Payment Secure',
      desc: 'We ensure secure payment',
      img: shipping4
    }
  ]
  return (
    <div className='flex ml-10 gap-10 mb-20 mt-5'>
      {titles.map(title => (
        <div className='card card-side bg-base-100 shadow-xl rounded-none'>
          <figure>
            <img src={title.img} className='p-4' alt='Movie' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{title.name}</h2>
            <p>{title.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceTitle
