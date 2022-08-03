/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DonorTable: React.FC = () => {
  let [user, setUser] = useState([])
  // let data: any = []
  useEffect(() => {
    // eslint-disable-next-line no-self-compare
    axios.get('http://localhost:8080/user/donor')
      .then(result => {
        setUser(result.data)

      })
      .catch(err => console.log("gagal render data table"))
  }, [])

  const bloodGroup: any = {
    A: [],
    B: [],
    AB: [],
    O: [],
  }
  const { A, B, AB, O } = bloodGroup

  const tableData = () => {
    user.map((result: any) => {
      const { bloodType, firstName } = result
      if (bloodType === 'A') {
        A.push(firstName)
        console.log(A)
      } else if (bloodType === 'B') {
        B.push(firstName)
        console.log(B)
      } else if (bloodType === 'AB') {
        AB.push(firstName)
        console.log(AB)
      } else if (bloodType === 'O') {
        O.push(firstName)
        console.log(O)
      }

    })
  }
  const [bloodA, setBloodA] = useState([])
  const [bloodAB, setBloodAB] = useState([])
  const [bloodB, setBloodB] = useState([])
  const [bloodO, setBloodO] = useState([])
  useEffect(() => {
    tableData()
    setBloodA(A)
    setBloodAB(AB)
    setBloodB(B)
    setBloodO(O)
  }, [])


  return (
    <section className='mt-[30px] flex flex-col justify-center items-center px-[20px]'>
      <h1 className='uppercase font-bold mb-[20px] font-Quicksand'>Donor Table</h1>
      <table className='table-auto '>

        <thead>
          <tr>
            <th>No</th>
            <th>Golongan Darah A</th>
            <th>Golongan Darah AB</th>
            <th>Golongan Darah B</th>
            <th>Golongan Darah O</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{bloodA}</td>
            <td>{bloodAB}</td>
            <td>{bloodB}</td>
            <td>{bloodO}</td>
          </tr>
        </tbody>

      </table>
    </section>
  )
}

export default DonorTable