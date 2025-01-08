import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  
  const userWishlist =useSelector(state=>state.wishlistReducer)

  return (
    <nav  className='flex bg-slate-600 fixed w-full p-3 text-white 
    '>
     <Link  style={{fontFamily:"Michroma"}} className='text-2xl font-bold' to={'/'}> <i className='fa-solid fa-truck-fast me-1'></i>
     E Cart
     </Link>
     <ul className='flex-1 text-right'>
     {
      insideHome &&  <li className='list-none inline-block px-5'>
      <input  style={{width:'300px'}} className='rounded p-2 text-black' type="text" placeholder='search product' />
    </li>
     }
      <li className='list-none inline-block px-5'>
       <Link to={'/wishlist'}>
          <i className='fa-solid fa-heart text-red-600'></i>
          <span>wishlist</span>
          <span className='bg-black text-white rounded-2xl p-1'>{userWishlist?.length}</span>
       </Link>
      </li>

      <li className='list-none inline-block px-5'>
      <Link to={'/cart'}>
        <i className='fa-solid fa-cart-plus text-amber-700'></i>
          <span>Cart</span>
          <span className='bg-black text-white rounded-2xl p-1'>0</span>
      </Link>
      </li>

     </ul>
      </nav>
  )
}

export default Header