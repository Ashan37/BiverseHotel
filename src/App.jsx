import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dining from './pages/Dining'
import Events from './pages/Events'
import Offers from './pages/Offers'


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
        <Route path='/events' element={<Events/>}/>
        <Route path='/offers' element={<Offers/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
