import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Shop.css"

const Product = ({ product, handleAddToCart }) => {

  return (
    <div className='product'>
      <img src={product.img} alt="" />
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Manufacturer: {product.seller}</p>
      <p>Ratings: {product.ratings} stars</p>
      <button onClick={() => handleAddToCart(product)}>
        Add to Cart 
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  )
}

export default Product
