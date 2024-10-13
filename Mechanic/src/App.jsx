import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Services } from './components/Services';
import { Bookings } from './components/Bookings';
import { Thank } from './components/Thank'


function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Bookings' element={<Bookings/>} />
          <Route path='/Thank' element={<Thank />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
