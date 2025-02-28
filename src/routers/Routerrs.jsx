import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function Routerrs() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
