import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from './Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/FakeDb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];

        // get the id from local storage      
        for (const id in storedCart) {

            //    get the product by using id 
            const addedItem = products.find(item => item.id === id)
            if (addedItem) {
                // get quantity of the product 
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);   
            }
        }
        setCart(savedCart)
    }, [products])

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
