import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map((product, index) => <Product
                        key={index}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-summary'>
                <div className='cart'>
                    <h2>Order Summary</h2>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>   
                </div>

            </div>
        </div>
    )
}

export default Shop
