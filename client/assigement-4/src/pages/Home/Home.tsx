import React from 'react';
import { Navbar, Hero, Card } from "../../components";
import { Helmet, HelmetProvider } from "react-helmet-async";


// npm i --save-dev @types/react-document-meta

const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SMART DONOR</title>
      </Helmet>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main className='bg-hero-pattern overflow-x-hidden'>
        <Card />
      </main>
      <footer></footer>
    </HelmetProvider>
  )
}

export default Home
