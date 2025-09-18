import { useState } from 'react'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'

function NavigationBar() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-30 flex flex-row items-center justify-between bg-white shadow-xl p-5 hover: cursor-pointer'>
      <div className='flex flex-row items-center justify-between w-35'>
        <img src={logo} alt="logo"/>
        <h1 className='text-3xl text-primary font-bold'>NiñArts</h1>
      </div>

      <img src={hamburger} alt="menu" />
    </div>
  )
}

export default NavigationBar;