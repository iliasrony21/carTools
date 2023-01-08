import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { productId } = useParams()
  return (
    <div>
      <h1> product details page</h1>
      <h1>product ID : {productId}</h1>
    </div>
  )
}

export default ProductDetails
