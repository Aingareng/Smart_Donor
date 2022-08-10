import React, { useState, useEffect, SyntheticEvent } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import login from '../../interface/login';

const Login: React.FC = () => {

  const [users, setUsers] = useState(null)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  let navigate = useNavigate()



  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault()
    axios.post('http://localhost:8080/user/login ', {
      "email": Email,
      "password": Password
    })
      .then((res: any) => {
        setUsers(res.data)

      })
      .catch(err => console.log(err))
  }

  // useEffect(() => {

  //   if (users === true) {
  //     localStorage.setItem("USER_STORAGE", JSON.stringify({ email: Email, password: Password }))

  //     navigate('/')
  //   } else if (users === false) {

  //     alert("Email atau password salah")
  //   }
  // }, [Email, Password, navigate, users])


  return (
    <HelmetProvider>
      <Helmet><title>Login</title></Helmet>
      <section className='md:w-[70%] flex justify-center flex-col items-center mx-auto my-[10%] box-border p-[10px] mobile-s:w-[5%] mobile-l:w-[90%] iphone:w-[80%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
        <h1 className='font-Quicksand text-2xl font-bold text-center uppercase text-teal-500'>Smart <span className='text-red-500'>Donor</span></h1>
        <div className='bg-white shadow-md shadow-gray-300 mt-[10px]  w-[90%] rounded-md p-[15px] box-border mobile-s:w-[100%]'>
          <p className='font-Quicksand text-center font-semibold text-teal-700'>Login Ke Halaman</p>
          <form onSubmit={handleLogin} className='p-[5px] flex justify-center flex-col items-center'>
            <input className='w-[90%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' type="email" name="" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input className='w-[90%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md' type="password" name="" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password ' />
            <input className='w-[90%] h-[40px] mt-[10px] text-white font-Quicksand my-[5px] bg-teal-500 px-[5px] rounded-md duration-200 ease-in hover:bg-teal-800 cursor-pointer' type="submit" value="Masuk" />
          </form>
          <hr className='w-full border-teal-300 border-[1px] my-[5px]' />
          <div onClick={() => navigate('/register')} className='p-[5px] mt-[10px] mx-auto bg-teal-300 w-[50%] rounded-md hover:cursor-pointer hover:bg-teal-500 mobile-s:w-[90%] iphone:p-[3px]'>
            <p className='text-center text-white font-Quicksand  iphone:text-sm '><a href="#regiter">Daftar</a></p>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Login