import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { productId } = useParams()
  const [items, setItems] = useState([])
  const [count, setCount] = useState(1)
  const handleInc = () => {
    setCount(count + 1)
    fetch(`http://localhost:5000/products/${productId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ count, items })
    })
      .then(res => res.json())
      .then(data => {
        console.log('increase page', data)
        if (data.acknowledged) {
          fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(result => setItems(result))
        }
      })
  }
  const handleDec = event => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const handleChange = e => {
    setCount(e.target.count)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })
  }, [productId])
  return (
    <div>
      <div className='cover bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800 pb-10'>
        <h1 className='text-4xl text-white font-bold text-center pt-10 mb-2 '>
          {' '}
          Product Details
        </h1>
        <span className='text-white ml-[680px] '>Home </span>
        <span className='text-white'>{'>'}</span>
        <span className='text-primary '>Product Details</span>
      </div>
      <div className='details flex w-full '>
        <div className='details-one '>
          <img
            src={items.img}
            className='ml-10 p-10 w-[1200px] h-[650px]'
            alt=''
          />
        </div>
        <div className='cart-two ml-20'>
          <div className='details-two  mt-10'>
            <h1 className='text-5xl text-black font-bold'>{items.name}</h1>
            <h1 className='text-2xl font-bold mt-5 mb-5'>
              product ID : {productId}
            </h1>
            <p className='text-2xl'>{items.description}</p>
            <p className='text-4xl font-bold mt-5 text-red-600'>
              $ {items.price}
            </p>
            <p className='text-2xl mt-2 font-bold'>
              {' '}
              Available Stocks: {items.stocks}
            </p>
            <p className='mt-10 flex'>
              Quantity:{' '}
              <span
                className='btn btn-sm rounded-none ml-5 bg-gray-300 text-black hover:bg-primary'
                onClick={handleInc}
              >
                +
              </span>{' '}
              <input
                type='text'
                className='form-control w-10 pl-3'
                value={items.quantity}
                name='name'
                onChange={handleChange}
              />
              <span
                className='btn btn-sm bg-gray-300 text-black  rounded-none  hover:bg-primary'
                onClick={handleDec}
              >
                -
              </span>
            </p>
          </div>
          <div className='buttons1 flex my-5 '>
            <button className='btn rounded-none w-80 bg-blue-500  mr-5'>
              Buy Now
            </button>
            <button className='btn rounded-none w-80 bg-primary text-white '>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
