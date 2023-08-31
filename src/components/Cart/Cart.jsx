import React from 'react'
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {

    const total = cart.reduce((previous,current)=>current=previous+current.price , 0)
    console.log("cart", total);

    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: <b>{cart.length}</b></p>
            <p>Total Price: <b>{total}</b></p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>

            <div className='btn-cart'>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /> </button>
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
        </div>
    )
}

export default Cart
