import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ item }) => {
  const navigate = useNavigate()
  const showProducts = id => {
    const path = `/products/${id}`
    navigate(path)
  }
  return (
    <div>
      <div className='card card-compact max-w-72 max-h-96  bg-base-100 shadow-xl'>
        <figure>
          <img src={item.img} className='max-w-full h-52' alt='products' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{item.name}</h2>
          <p>{item.description}</p>
          <p className='text-red-600'>$ {item.price}</p>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-primary'
              onClick={() => showProducts(item._id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
