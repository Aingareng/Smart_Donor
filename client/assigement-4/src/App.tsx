import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register, Donor } from "./pages";

import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/donor' element={<Donor />}></Route>

      </Routes>
    </Router>
  )
}


export default App;
