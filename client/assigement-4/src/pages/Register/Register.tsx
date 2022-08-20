import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [FirstName, setFirstName] = useState<string>('')
  const [LastName, setLastName] = useState<string>('')
  const [Age, setAge] = useState<number>(0)
  const [Email, setEmail] = useState<string>('')
  const [Password, setPassword] = useState<string>('')
  const [BloodType, setBloodType] = useState<string>('')

  const navigate = useNavigate()


  const handleRegister = (e: SyntheticEvent) => {
    e.preventDefault()

    const userRegis = {
      firstName: FirstName,
      lastName: LastName,
      age: Age,
      email: Email,
      password: Password,
      bloodType: BloodType
    }
    const { firstName, age, email, password, bloodType } = userRegis

    axios.post('http://api.smart-donor.local/user/register', {
      firstName: firstName,
      lastName: LastName,
      age: age,
      email: email,
      password: password,
      bloodType: bloodType
    })
      .then(res => {

        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    console.log("-> componentDidUpdate equivalent")
  }, [FirstName, LastName, Age, Email, Password, BloodType])

  return (
    <HelmetProvider>
      <Helmet><title>Register</title></Helmet>
      <section className='flex justify-center flex-col items-center mx-auto my-[10%] box-border p-[10px] sm:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
        <h1 className='font-Quicksand text-2xl font-bold text-center uppercase text-teal-500'>Smart <span className='text-red-500'>Donor</span></h1>
        <div className='bg-white shadow-md shadow-gray-300 mt-[10px]  w-[90%] rounded-md p-[15px] box-border'>
          <p className='font-Quicksand text-center font-semibold text-teal-700'>Register Form</p>
          <form onSubmit={handleRegister} className='p-[5px] flex justify-center flex-col items-center'>
            <div className='w-[90%] flex justify-between'>
              <input className='w-[45%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' />
              <input className='w-[45%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' onChange={(e) => setLastName(e.target.value)} type="text" placeholder='last Name' />
            </div>
            <input className='w-[90%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' onChange={(e) => setAge(e.target.valueAsNumber)} type="number" name="" id="" placeholder='Age' />
            <input className='w-[90%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <input className='w-[90%] h-[40px] my-[5px]  focus:outline-none bg-slate-100 px-[5px] py-10px] rounded-md ' onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Password' />

            <div className=' w-[90%] my-[5px]'>
              <select className='text-teal-600 focus:outline-none' name="blood-group" onChange={(e) => setBloodType(e.target.value)} id="blood-group">
                <option className='text-teal-500'>Pilih tipe golongan darah</option>
                <option className='text-teal-500' value="A">Golongan Darah A</option>
                <option className='text-teal-500' value="B">Golongan Darah B</option>
                <option className='text-teal-500' value="AB">Golongan Darah AB</option>
                <option className='text-teal-500' value="O">Golongan Darah O</option>
              </select>
            </div>
            <hr className='w-full border-teal-300 border-[1px] my-[5px]' />
            <input className='w-[90%] h-[40px] mt-[10px] text-white font-Quicksand my-[5px] bg-teal-500 px-[5px] rounded-md duration-200 ease-in hover:bg-teal-800 cursor-pointer' type="submit" value="Daftar" />
            <button onClick={() => navigate('/login')} className='w-[30%]  h-[40px] mt-[10px] text-white font-Quicksand my-[5px] bg-teal-500 px-[5px] rounded-md duration-200 ease-in hover:bg-teal-800 cursor-pointer'>Login</button>
          </form>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Register