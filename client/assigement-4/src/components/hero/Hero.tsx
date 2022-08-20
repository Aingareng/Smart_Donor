import React from 'react'
import { Dokter, blob } from "../../assets";
import { useNavigate } from 'react-router-dom';


const Hero: React.FC = () => {

  const navigate = useNavigate()

  return (
    <section className='flex flex-col items-end  mt-0 px-[15px] py-[10vh] ||  mobile-l:flex-col || -z-50 sm:flex-col sm:items-center || md:mt-[5%]  lg:flex-row-reverse lg:items-center lg:mt-[10%]    xl:mt-[5%] xl:flex-row-reverse xl:items-center xl:justify-center   2xl:flex-row-reverse 2xl:items-center 2xl:mt-[5%] 2xl:justify-center ' >
      <div className='relative box-border w-[80%]   ||  mobile-s:h-[10%]   mobile-s:mr-[10%]  mobile-l:mx-auto mobile-l:w-[90%] mobile-l:items-center  || sm:mr-[30px] sm:w-[70%]  ||  md:w-[90%] ||  lg:w-[70%] || 2xl:w-1/2'>
        <img className='absolute right-[5%] top-[5%] -z-10 w-[300px] h-[300px]  mobile-l:w-[300px] mobile-l:h-[300px] mobile-l:top-[6%] mobile-l:left-[10%]    sm:left-[5%] sm:-top-[10%]      md:right-[2%]   lg:right-[1%] lg:scale-[0.8]    xl:right-[40%] xl:w-[380px] xl:h-[380px] 2xl:right-[22%] 2xl:scale-[1.3] ' src={blob} alt="" />
        <img className=' ml-[25px] mt-[20px] w-[370px] h-[370px] rounded-xl   mobile-l:w-[330px] mobile-l:h-[330px] || sm:scale-[0.9] sm:w-[300px] sm:h-[300px]  md:mr-[50px]    lg:scale-[1]    xl:scale-[1.2]  2xl:scale-[1.2] ' src={Dokter} alt="" />
      </div>
      <div className=' p-[15px] box-border flex flex-col items-end mr-[3px]'>
        <h1 className='text-right p-[10px] font-Quicksand font-semibold text-red-700 w-[100%] text-md  ||  sm:text-sm  ||   md:text-lg  ||  lg:text-md lg:w-full xl:right-[40%] xl:text-xl   2xl:w-[80%] 2xl:text-xl '>Mendonorkan darah adalah tindakan solidaritas. Bergabunglah dengan upaya dan selamatkan nyawa</h1>
        <button onClick={() => navigate('/register')} className='bg-rose-600 rounded-md p-[5px] mt-[10px] w-[100px] font-Quicksand text-white sm:scale-[0.9] 2xl:scale-[1.1]'>Yuk, Donor</button>
      </div>
    </section>

  )
}

export default Hero