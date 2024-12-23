import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Components/Navbar'
import { Routes, Route } from 'react-router'
import { Home } from './Routes/Home'
import { About } from './Routes/about'
import { Contact } from './Routes/Contact'
import { Products } from './Routes/Products'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
