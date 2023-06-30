import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <div className='nav'>
        <span className="logo"> REDUX STORE </span>
        <div className='nav-items'>
            <Link className="navLink" to='/'>Home</Link>
            <Link className="navLink" to='/cart'>Cart</Link>
            <span className="cartCount">Cart Items: {items.length} </span>
        </div>
        
    </div>
  )
}

export default Navbar