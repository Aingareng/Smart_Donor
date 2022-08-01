import React, { useEffect, useState } from 'react'
import { bloodA, bloodAB, bloodB, bloodO } from "../../assets/images";
import axios from 'axios';


const Card: React.FC = () => {
  const [BloodA, setBloodA] = useState(0)
  const [BloodAB, setBloodAB] = useState(0)
  const [BloodB, setBloodB] = useState(0)
  const [BloodO, setBloodO] = useState(0)

  const type = {
    typeA: 0,
    typeB: 0,
    typeAB: 0,
    typeO: 0
  }

  useEffect(() => {
    axios.get('http://localhost:8080/user ')
      .then(res => {
        // eslint-disable-next-line array-callback-return
        res.data.users.map((result: any) => {
          if (result.bloodType === 'A') {
            setBloodA(type.typeA += 1)
          } else if (result.bloodType === 'B') {
            setBloodB(type.typeB += 1)
          } else if (result.bloodType === 'AB') {
            setBloodAB(type.typeAB += 1)
          } else if (result.bloodType === 'O') {
            setBloodO(type.typeO += 1)
          }

        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BloodA, BloodAB, BloodB, BloodO])

  return (
    <section className='box-border p-[15px] flex justify-center flex-wrap'>
      <div className='bg-rose-200 shadow-md shadow-slate-200 rounded-md box-border || my-[5px] mx-[5px] w-[200px] h-[240px]'>
        <img src={bloodA} alt="blood A" />
        <hr className='border-red-500 border-dashed mb-2' />
        <div className='flex justify-between'>
          <p className='uppercase font-Quicksand font-semibold ml-[10px]'>donatur : <span>{BloodA}</span></p>
          <button className='bg-green-400 p-[1px] rounded-md px-[5px]  font-Quicksand mb-[10px] mr-[5px]'>Detail</button>
        </div>
      </div>
      <div className='bg-rose-200 shadow-md shadow-slate-200 rounded-md box-border || my-[5px] mx-[5px]  w-[200px] h-[240px]'>
        <img src={bloodAB} alt="blood AB" />
        <hr className='border-red-500 border-dashed mb-2' />
        <div className='flex justify-between'>
          <p className='uppercase font-Quicksand font-semibold ml-[10px]'>donatur : <span>{BloodAB}</span></p>
          <button className='bg-green-400 p-[1px] rounded-md px-[5px]  font-Quicksand mb-[10px] mr-[5px]'>Detail</button>
        </div>
      </div>
      <div className='bg-rose-200 shadow-md shadow-slate-200 rounded-md box-border || my-[5px] mx-[5px] w-[200px] h-[240px]'>
        <img src={bloodB} alt="blood B" />
        <hr className='border-red-500 border-dashed mb-2 ' />
        <div className='flex justify-between'>
          <p className='uppercase font-Quicksand font-semibold ml-[10px]'>donatur : <span>{BloodB}</span></p>
          <button className='bg-green-400 p-[1px] rounded-md px-[5px]  font-Quicksand mb-[10px] mr-[5px]'>Detail</button>
        </div>
      </div>
      <div className='bg-rose-200 shadow-md shadow-slate-200 rounded-md box-border w-[200px] h-[240px] my-[5px] mx-[5px]'>
        <img src={bloodO} alt="blood O" />
        <hr className='border-red-500 border-dashed mb-2' />
        <div className='flex justify-between'>
          <p className='uppercase font-Quicksand font-semibold ml-[10px]'>donatur : <span>{BloodO}</span></p>
          <button className='bg-green-400 p-[1px] rounded-md px-[5px]  font-Quicksand mb-[10px] mr-[5px]'>Detail</button>
        </div>
      </div>
    </section>
  )
}

export default Card