import React from 'react'
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {

    const quantity = cart.reduce((previous, current) => current = previous + current.quantity, 0)
    const totalPrice = cart.reduce((previous, current) => current = previous + current.price, 0)
    const totalShipping = cart.reduce((previous, current) => current = previous + current.shipping, 0)
    const tax = (totalPrice * 5) / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: <b>{quantity}</b></p>
            <p>Total Price: <b>${totalPrice}</b></p>
            <p>Total Shipping Charge: <b>${totalShipping}</b></p>
            <p>Tax: <b>${tax.toFixed(2)}</b></p>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
            <div className='btn-cart'>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /> </button>
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
        </div>
    )
}

export default Cart
