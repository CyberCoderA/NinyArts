import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import fb_logo from './images/fb_logo.png' 
import ig_logo from './images/ig_logo.png' 
import email_logo from './images/email_logo.png' 
import map from './images/map.png' 
import location from './images/location.png' 

function Contact() {
  const [isMenuOpen, setMenuStatus] = useState(false);

    return (
      <div className='bg-white h-screen w-full flex flex-col items-center'>
          <NavigationBar isMenuOpen={isMenuOpen} setMenuStatus={setMenuStatus}/>
          <div className='h-full flex flex-col justify-around items-center gap-10 p-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-center text-5xl text-primary'>
                    Contact Us
                </h1>

                <p className='text-xl text-center text-accent text-balance'>
                    Have questions? Connect with us in the contact details provided below. Want to visit the us? Follow the map shown below.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-row items-center gap-3'>
                    <img src={fb_logo} className='h-15' alt="facebook"/>
                    <a className='text-accent text-xl text-wrap' href='https://www.facebook.com/profile.php?id=100063593317560'>NiñArts</a>
                </div>

                <div className='flex flex-row items-center gap-3'>
                    <img src={ig_logo} className='h-15' alt="facebook"/>
                    <a className='text-accent text-xl text-wrap' href='#'>@ninalyn1</a>
                </div>

                <div className='flex flex-row items-center gap-3'>
                    <img src={email_logo} className='h-15' alt="facebook"/>
                    <a className='text-accent text-xl text-wrap' href='#'>@ninalyn1</a>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-row items-center gap-2 mb-2'>
                    <img src={location} alt="location" className='h-8' />
                    <p className='text-xl font-light text-accent mb-1'>
                        XXXX, Someplace St. Pasay City
                    </p>
                </div>
                <img src={map} alt="map" className='mb-10'/>
            </div>

          </div>
      </div>
    )
  }
  
  export default Contact;