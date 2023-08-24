import React from 'react'
import "./Header.css"
import logo from "../../assets/Logo.svg"
const Header = () => {
    return (
        <div>
            <div className='header'> 
                <img src={logo} alt="" />

                <div className='menu-list'>
                    <a href='/order'>Order</a>
                    <a href='/rivew'>Order Review</a>
                    <a href='/inventory'>Manage Inventory</a>
                    <a href='/login'>Login</a>
                </div>

            </div>
        </div>
    )
}

export default Header
