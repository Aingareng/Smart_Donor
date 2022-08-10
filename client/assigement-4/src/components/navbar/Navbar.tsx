import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState('flex flex-col items-center justify-evenly w-[60%] h-[100vh]  sm:translate-x-[100%] sm:absolute sm:right-0 sm:top-0 sm:flex-col sm:h-[100vh] sm:bg-opacity-50  sm:bg-rose-400  md:flex-row md:justify-around md:bg-opacity-0 md:h-[10vh] lg:flex-row lg:justify-around lg:h-[10vh] lg:bg-opacity-0 xl:flex-row xl:h-[10vh] xl:bg-opacity-0 2xl:flex-row 2xl:h-[10vh] 2xl:bg-opacity-0')
  const [burger, setBurger] = useState('w-[40px] right-[20px]  mobile-l:flex mobile-l:flex-col mobile-l:scale-50 mobile-l:top-[0px] sm:scale-75 sm:top-[10px] sm:flex sm:flex-col md:hidden hover:cursor-pointer lg:hidden xl:hidden 2xl:hidden')
  const [close, setClose] = useState('sm:absolute sm:hidden 2xl:hidden')

  const handleMenu = () => {
    setMenu('flex flex-col items-center justify-evenly w-[60%] h-[100vh] sm:translate-x-[0] sm:absolute sm:right-0 sm:top-0 sm:flex-col sm:h-[100vh] sm:bg-opacity-50  sm:bg-rose-400  md:flex-row md:justify-around md:bg-opacity-0 md:h-[10vh] lg:flex-row lg:justify-around lg:h-[10vh] lg:bg-opacity-0 xl:flex-row xl:h-[10vh] xl:bg-opacity-0 2xl:flex-row 2xl:h-[10vh] 2xl:bg-opacity-0')
    setBurger('w-[40px] right-[20px]  mobile-l:flex mobile-l:flex-col mobile-l:scale-50 mobile-l:top-[0px] mobile-l:hidden sm:hidden sm:scale-75 sm:top-[10px] sm:flex sm:flex-col md:hidden hover:cursor-pointer lg:hidden xl:hidden 2xl:hidden')
    setClose('sm:absolute hover:cursor-pointer ')
  }
  const closeButton = () => {
    setMenu('flex flex-col items-center justify-evenly w-[60%] h-[100vh] sm:translate-x-[100%] sm:absolute sm:right-0 sm:top-0 sm:flex-col sm:h-[100vh] sm:bg-opacity-50  sm:bg-rose-400  md:flex-row md:justify-around md:bg-opacity-0 md:h-[10vh] lg:flex-row lg:justify-around lg:h-[10vh] lg:bg-opacity-0 xl:flex-row xl:h-[10vh] xl:bg-opacity-0 2xl:flex-row 2xl:h-[10vh] 2xl:bg-opacity-0')
    setBurger('w-[40px] right-[20px]  mobile-l:flex mobile-l:flex-col mobile-l:scale-50 mobile-l:top-[0px] sm:scale-75 sm:top-[10px] sm:flex sm:flex-col md:hidden hover:cursor-pointer lg:hidden xl:hidden 2xl:hidden')
    setClose('sm:absolute sm:hidden 2xl:hidden')
  }
  const handleLogOut = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Anda yakin?')) {
      localStorage.clear()
      navigate('/login')
    } else {
      navigate('/')

    }




  }

  useEffect(() => {
  }, [menu, burger, close])
  return (

    <nav className='bg-rose-300 z-50  shadow-gray-300 shadow-md h-[10vh]  ||  mobile-s:h-[10vh] mobile-m:h-[10vh] mobile-l:items-center mobile-l:h-[10vh]  ||  sm:fixed sm:w-full sm:top-0 sm:flex sm:items-center md:flex md:h-[10vh] md:items-center md:justify-around lg:h-[10vh] lg:flex lg:flex-row lg:items-center lg:justify-around xl:h-[10vh] xl:flex xl:justify-around xl:items-center 2xl:h-[10vh] 2xl:flex 2xl:flex-row 2xl:justify-around 2xl:items-center'>
      <h1 className='leading-[60px] ml-[10px] uppercase text-white font-semibold   iphone:text-xl    mobile-s:leading-[70px] mobile-s:text-lg mobile-m:leading-[72px] mobile-m:text-md mobile-l:scale-100 mobile-l:leading-[72px] sm:text-md md:text-sm lg:text-md 2xl:scale-150'>smart <span className='text-red-500'>donor</span></h1>
      <ul className={menu}>
        <li><a className='text-white' href="/">Home</a></li>
        <li onClick={() => navigate('/donor')} ><a className='text-white' href="/donor">Donatur</a></li>
        <li onClick={handleLogOut} className='text-white'>Logout</li>
      </ul>
      <div onClick={handleMenu} className={burger}>
        <span className='block bg-white w-full rounded-md h-[5px] mb-[4px] '></span>
        <span className='block bg-white w-full rounded-md h-[5px] my-[4px]'></span>
        <span className='block bg-white w-full rounded-md h-[5px] my-[4px]'></span>
      </div>
      <div onClick={closeButton} className={close}>
        <h1 className='uppercase text-white font-semibold text-lg'>x</h1>
      </div>
    </nav>
  )
}

export default Navbar