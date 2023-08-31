import React from 'react'
import "./Shop.css"

const Product = ({product,handleAddToCart}) => {
  
  return (
    <div className='product'>
      <img src={product.img} alt="" />
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Manufacturer: {product.seller}</p>
      <p>Ratings: {product.ratings}</p>
      <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default Product
