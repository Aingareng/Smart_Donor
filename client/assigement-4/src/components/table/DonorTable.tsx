/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { SyntheticEvent, useEffect, useState } from 'react'
import axios from 'axios'



const DonorTable: React.FC = () => {
  let [user, setUser] = useState([])
  const [typeA, setTypeA] = useState([])
  const [typeAB, setTypeAB] = useState([])
  const [typeB, setTypeB] = useState([])
  const [typeO, setTypeO] = useState([])

  let userList: any = {
    bloodA: [],
    bloodB: [],
    bloodAB: [],
    bloodO: []
  }
  const url = 'http://localhost:8080/user/donor'
  const { bloodA, bloodAB, bloodB, bloodO } = userList

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(url)
        setUser(response.data)

        user.map(result => {
          const { bloodType, firstName } = result
          if (bloodType === 'A') {
            bloodA.push(firstName)
            setTypeA(bloodA)
          } else if (bloodType === 'B') {
            bloodB.push(firstName)
            setTypeB(bloodB)
          } else if (bloodType === 'AB') {
            bloodAB.push(firstName)
            setTypeAB(bloodAB)
          } else if (bloodType === 'O') {
            bloodO.push(firstName)
            setTypeO(bloodO)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    getData()

  }, [typeA, typeAB, typeB, typeO])


  const [bloodSelect, setBloodSelect] = useState<string>('')
  const [userSelect, setUserSelect] = useState([])
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    axios.post(url, { bloodType: bloodSelect })
      .then((result: any) => {
        setUserSelect(result.data)
        console.log(userSelect);

      })
      .catch(err => console.log(err))
  }

  return (
    <section className='mt-[30px]  px-[20px]'>
      <h1 className='uppercase font-bold mb-[20px] font-Quicksand text-center'>Donor Table</h1>
      <form onSubmit={handleSubmit}>
        <select className='text-rose-600 my-5 focus:outline-none shadow-sm shadow-slate-200 rounded-sm p-[10px]' onChange={(e) => setBloodSelect(e.target.value)} name="blood-group" id="blood-group">
          <option className='text-rose-500 font-Quicksand'>Pilih golongan darah</option>
          <option className='text-rose-500' value="A">Golongan Darah A</option>
          <option className='text-rose-500' value="B">Golongan Darah B</option>
          <option className='text-rose-500' value="AB">Golongan Darah AB</option>
          <option className='text-rose-500' value="O">Golongan Darah O</option>
        </select>
        <input className='shadow-sm shadow-slate-200 font-Quicksand rounded-sm w-[17%] p-[6px] mx-[10px] duration-150 hover:cursor-pointer hover:bg-rose-600' type="submit" value="Cari" />
      </form>
      <table className='table-auto rounded-md shadow-sm  shadow-slate-400 w-full'>
        <thead className='bg-slate-200 w-full'>
          <tr className=''>
            <th className='p-[10px] mx-[10px]'>No</th>
            <th className='p-[10px] mx-[10px]'>Nama</th>
            <th className='p-[10px] mx-[10px]'>Umur</th>
            <th className='p-[10px] mx-[10px]'>Email</th>
          </tr>
        </thead>
        <tbody className='bg-slate-100'>
          {
            userSelect.map((result: any, index) => (
              <tr key={index} className='text-center'>
                <td>{index + 1}</td>
                <td>{result.firstName + " " + result.lastName}</td>
                <td>{result.age}</td>
                <td>{result.email}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </section>
  )
}

export default DonorTable