import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import ProductCard from './components/ProductCard';

import product1 from './images/product1.png';
import product2 from './images/product2.png';
import cart from './images/shop_cart.png';

function Shop() {
  const [isMenuOpen, setMenuStatus] = useState(false);

    return (
      <div className='bg-white h-screen w-full flex flex-col items-center'>
          <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
          <div className='h-full w-full flex flex-col justify-around items-center gap-10 p-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-center text-5xl text-primary'>
                    Shop
                </h1>

                <p className='text-xl text-center text-accent text-wrap'>
                    Enjoy our selection of hand-crafted products.               
                </p>
            </div>

            <div className='flex flex-col w-full items-start'>
                <h1 className='font-bold text-left text-2xl mb-8 text-primary'>
                    Featured Products &gt;
                </h1>

                <div className='flex flex-col w-full gap-5'>
                    <ProductCard rating="12" price="Php 20.00" title="Keychain" image={product1} />
                    <ProductCard rating="11" price="Php 15.00" title="Keychain" image={product2} />
                </div>
            </div>

            <div className='fixed bottom-4 right-4 w-30 h-30 rounded-full bg-primary flex justify-center items-center shadow-2xl' style={{ boxShadow: '-4px 4px 10px rgba(0,0,0,0.3)' }}>
                <img src={cart} alt="shop_cart" />
            </div>
          </div>
      </div>
    )
  }
  
  export default Shop;