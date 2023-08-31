import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from './Product';
import Cart from '../Cart/Cart';

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
                <Cart cart={cart}></Cart>

            </div>
        </div>
    )
}

export default Shop
