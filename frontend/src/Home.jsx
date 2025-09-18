import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import ShopButtonRectangular from './components/ShopButtonRectangular'
import pic1 from './images/bg_pic1.png'
import pic2 from './images/bg_pic2.png'

function Home() {

  return (
    <div className='bg-gradient-to-tl from-lime-200 to-primary h-screen w-full flex flex-col items-center'>
        <NavigationBar/>
        <div className='h-full flex flex-col justify-center items-center'>
            <img src={pic1} alt="pic1" className='absolute bottom-0 right-0 h-80'/>
            <img src={pic2} alt="pic1" className='absolute top-28 left-0 h-40'/>

            <h1 className='font-bold italic text-center text-5xl text-white mb-10 z-3'>
                “Stitch the tapestry of your heart.”
            </h1>

            <p className='font-light italic text-center text-white text-xl w-90 mb-10 z-3'>
                Featuring an array of incredible hand crafted products that pleases the eye and the heart.
            </p>

            <ShopButtonRectangular />
        </div>
    </div>
  )
}

export default Home;