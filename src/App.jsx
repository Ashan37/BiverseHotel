import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dining from './pages/Dining'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dining' element={<Dining/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
