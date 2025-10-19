import { useState } from 'react'
import { Link } from "react-router-dom";

import NavigationBar from './components/NavigationBar'
import ButtonRectangular from './components/ButtonRectangular'
import ShopCart from "./images/shop_cart.png";
import pic1 from './images/bg_pic1.png'
import pic2 from './images/bg_pic2.png'

function Home() {
  const [isMenuOpen, setMenuStatus] = useState(false);

  return (
    <div className='bg-gradient-to-tl from-lime-200 to-primary h-screen w-full flex flex-col items-center'>
        <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
        <div className='h-full flex flex-col justify-center items-center'>
            <img src={pic1} alt="pic1" className='absolute bottom-0 right-0 h-50 md:h-90 lg:h-140'/>
            <img src={pic2} alt="pic1" className='absolute top-25 left-0 h-40 md:h-60 md:top-30 lg:h-100 '/>

            <h1 className='font-bold italic text-center text-2xl w-60 text-white mb-5 z-3 md:text-3xl md:w-78 lg:text-6xl lg:w-200 lg:mb-10'>
                "Stitch the tapestry of your heart."
            </h1>

            <p className='font-light italic text-center text-white text-md w-60 mb-10 z-3 md:text-xl md:w-90 lg:text-3xl lg:w-130'>
                Featuring an array of incredible hand crafted products that pleases the eye and the heart.
            </p>

            <div className='w-full flex justify-center z-3'>
              <Link to={'/login'}>
                <ButtonRectangular title="Get Started" buttonType="wide" />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;