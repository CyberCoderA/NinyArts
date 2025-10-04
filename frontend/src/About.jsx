import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'

function About() {
  const [isMenuOpen, setMenuStatus] = useState(false);

    return (
      <div className='bg-white h-screen w-full flex flex-col items-center'>
          <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
          <div className='h-full flex flex-col justify-around items-center gap-10 p-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-center text-5xl text-primary'>
                    About Us
                </h1>

                <p className='text-xl text-center text-accent text-wrap'>
                    Get to know the the person behind Niñart.                 
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='w-80 h-100 bg-gray-400 rounded-4xl'></div>
                <p className='font-extralight italic text-center text-sm'>"Creating wonderful creations that tugs the strings of your heart" - Niñalyn Perez</p>
            </div>

            <div className='w-full flex flex-col justify-start'>
                <h1 className='font-bold text-start text-xl text-primary'>
                    Providing comfort and quality
                </h1>

                <p className='font-light text-sm mb-10'>
                    Welcome to Niñarts — Where we stitch the tapestry of your heart.
                    <br />
                    <br />
                    At Niñarts, we believe in the magic of handcrafted items — from cozy wearables and whimsical toys to elegant home décor. Each product is thoughtfully designed and meticulously crocheted, combining traditional techniques with modern flair. Whether you're looking for a unique gift, a custom creation, or something to brighten your space, Niñarts offers pieces that are made to be cherished.
                </p>
            </div>
          </div>
      </div>
    )
  }
  
  export default About;