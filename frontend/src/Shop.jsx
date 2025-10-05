import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import ProductCard from './components/ProductCard'
import CartPopup from './components/CartPopup'

import product1 from './images/product1.png';
import product2 from './images/product2.png';
import cart from './images/shop_cart.png';

function Shop() {
  const [isMenuOpen, setMenuStatus] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  const [addedItems, setAddedItems] = useState([false, false])

  const itemData = [
    {
      title: "Keychain",
      price: "Php 20.00",
      image: product1,
    },

    {
      title: "Keychain",
      price: "Php 15.00",
      image: product2,
    },
  ];

  const toggleCartPopup = () => setCartOpen(!isCartOpen)

  const toggleCart = (index) => {
    console.log(addedItems  )
    const newAdded = [...addedItems]
    newAdded[index] = !newAdded[index]
    setAddedItems(newAdded)
  }

  const cartCount = addedItems.filter(Boolean).length

  const cartItems = itemData.map((item, index) => addedItems[index] ? { ...item, index } : null).filter(Boolean);

    return (
      <div className='bg-white h-screen w-full flex flex-col items-center'>
          <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
          <div className='h-full w-full flex flex-col justify-around items-center gap-10 p-10 lg:justify-start'>
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

                <div className='flex flex-col w-full gap-5 lg:flex-row'>
                  {
                    itemData.map((item, index) => (
                      <ProductCard key={index} price={item.price} title={item.title} image={item.image} added={addedItems[index]} onToggleCart={() => toggleCart(index)} />
                    ))
                  }
                </div>
            </div>

            <div className='fixed bottom-4 right-4'>
                <div className='relative w-30 h-30 rounded-full bg-primary flex justify-center items-center shadow-2xl cursor-pointer' style={{ boxShadow: '-4px 4px 10px rgba(0,0,0,0.3)' }} onClick={toggleCartPopup}>
                    <img src={cart} alt="shop_cart" />
                </div>
                <div className='absolute top-0 right-0 flex justify-center items-center w-9 h-9 rounded-full bg-secondary'>
                    <h1 className='text-primary'>{cartCount}</h1>
                </div>
            </div>
          </div>

          {isCartOpen && (
            <>
              <div className='fixed inset-0 bg-accent opacity-80 backdrop-blur-sm z-40' onClick={toggleCartPopup}></div>
              <div className='fixed inset-0 flex justify-center items-center z-50'>
                <CartPopup cartItems={cartItems} onRemove={toggleCart} onClose={toggleCartPopup} />
              </div>
            </>
          )}
      </div>
    )
  }
  
  export default Shop;