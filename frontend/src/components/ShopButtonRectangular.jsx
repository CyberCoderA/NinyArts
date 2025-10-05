import { useState } from 'react'
import ShopCart from '../images/shop_cart.png' 
import { Link } from 'react-router-dom';

function ShopButtonRectangular() {

  return (
    <Link to={"/shop"}>
      <button className='flex items-center justify-center bg-primary border-3 border-white rounded-3xl w-50 h-20 p-5 z-1 hover:cursor-pointer'>
          <img src={ShopCart} alt="shop"/>
          <h1 className='font-bold text-center text-3xl text-white ml-5'>
              Shop
          </h1>
      </button>
    </Link>
  )
}

export default ShopButtonRectangular;