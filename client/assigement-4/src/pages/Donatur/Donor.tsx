import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar, DonorTable } from '../../components';

const Donor: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet><title>Donor</title></Helmet>
      <header>
        <Navbar />
      </header>
      <main>

        <DonorTable />
      </main>
      <footer></footer>
    </HelmetProvider>
  )
}

export default Donor