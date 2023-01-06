import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div>
      <div className='flex'>
        <div>
          <span className='text-4xl font-bold ml-10 mt-20 mb-10 inline'>
            Our <span className='text-primary mb-10 mr-5'>Products</span>
          </span>
        </div>
        <div className='divider w-80 '></div>
        <div className='mt-3 flex ml-10 gap-10'>
          <button className='btn-sm rounded buttons'>Brake Parts</button>
          <button className='btn-sm rounded buttons'>Wheels & Tires</button>
          <button className='btn-sm rounded buttons mr-5'>Turbo System</button>
        </div>
        <div className='divider w-80 '></div>
      </div>

      <div className='grid grid-cols-4 gap-10 ml-10 mr-10 mt-10'>
        {items.map(item => (
          <Product key={item._id} item={item}></Product>
        ))}
      </div>
    </div>
  )
}

export default Products
