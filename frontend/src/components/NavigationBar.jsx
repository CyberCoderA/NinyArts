import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'
import close from '../images/close.png'

function NavigationBar({ isMenuOpen, setMenuStatus }) {
  const [localMenuOpen, setLocalMenuStatus] = useState(false);
  const location = useLocation();

  const menuOpen = isMenuOpen !== undefined ? isMenuOpen : localMenuOpen;
  const toggleMenu = setMenuStatus || setLocalMenuStatus;

  const validateMenuStatus = () => {
    toggleMenu(!menuOpen);
  }

  const getLinkClass = (path) => {
    return location.pathname === path ? 'bg-primary text-white px-4 py-2 rounded-xl w-30 h-15 flex justify-center items-center' : 'text-primary';
  };

  return !menuOpen ? (
    <div className='w-full h-30 flex flex-row items-center justify-between bg-white shadow-xl p-2 md:p-5'>
      <div className='flex flex-row items-center justify-between w-35'>
        <img src={logo} className='h-15 md:h-20' alt="logo"/>
        <h1 className='text-2xl text-primary font-bold md:text-4xl'>NiñArts</h1>
      </div>

      <img src={hamburger} onClick={validateMenuStatus} alt="menu" className='hover:cursor-pointer' />
    </div>
  ) : (
    <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center'>
      <img src={close} onClick={validateMenuStatus} alt="menu" className='cursor-pointer absolute top-5 right-5' />
      <div className='flex flex-row items-center justify-center mb-10'>
        <img src={logo} alt="logo" className='h-10 mr-3' />
        <h1 className='text-3xl text-primary font-bold'>NiñArts</h1>
      </div>
      <nav className='flex flex-col items-center gap-8'>
        <Link to='/' onClick={validateMenuStatus} className={`font-bold hover:text-secondary   text-2xl ${getLinkClass('/')}`}>Home</Link>
        <Link to='/about' onClick={validateMenuStatus} className={`font-bold hover:text-secondary  text-2xl ${getLinkClass('/about')}`}>About</Link>
        <Link to='/contact' onClick={validateMenuStatus} className={`font-bold hover:text-secondary  text-2xl ${getLinkClass('/contact')}`}>Contact</Link>
        <Link to='/shop' onClick={validateMenuStatus} className={`font-bold hover:text-secondary   text-2xl ${getLinkClass('/shop')}`}>Shop</Link>
        <Link to='/login' onClick={validateMenuStatus} className={`font-bold hover:text-secondary   text-2xl ${getLinkClass('/login')}`}>Login</Link>
      </nav>
    </div>
  );
}

export default NavigationBar;