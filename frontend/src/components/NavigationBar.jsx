import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'
import close from '../images/close.png'

function NavigationBar({ isMenuOpen, setMenuStatus }) {
  const [localMenuOpen, setLocalMenuStatus] = useState(false);

  const menuOpen = isMenuOpen !== undefined ? isMenuOpen : localMenuOpen;
  const toggleMenu = setMenuStatus || setLocalMenuStatus;

  const validateMenuStatus = () => {
    toggleMenu(!menuOpen);
  }

  return !menuOpen ? (
    <div className='w-full h-30 flex flex-row items-center justify-between bg-white shadow-xl p-5'>
      <div className='flex flex-row items-center justify-between w-35'>
        <img src={logo} alt="logo"/>
        <h1 className='text-3xl text-primary font-bold'>NiñArts</h1>
      </div>

      <img src={hamburger} onClick={validateMenuStatus} alt="menu" className='cursor-pointer' />
    </div>
  ) : (
    <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center'>
      <img src={close} onClick={validateMenuStatus} alt="menu" className='cursor-pointer absolute top-5 right-5' />
      <div className='flex flex-row items-center justify-center mb-10'>
        <img src={logo} alt="logo" className='h-10 mr-3' />
        <h1 className='text-3xl text-primary font-bold'>NiñArts</h1>
      </div>
      <nav className='flex flex-col items-center gap-8'>
        <Link to='/' onClick={validateMenuStatus} className='text-primary font-bold hover:text-accent text-2xl'>Home</Link>
        <Link to='/about' onClick={validateMenuStatus} className='text-primary font-bold hover:text-accent text-2xl'>About</Link>
        <Link to='/contact' onClick={validateMenuStatus} className='text-primary font-bold hover:text-accent text-2xl'>Contact</Link>
        <Link to='/shop' onClick={validateMenuStatus} className='text-primary font-bold hover:text-accent text-2xl'>Shop</Link>
      </nav>
    </div>
  );
}

export default NavigationBar;