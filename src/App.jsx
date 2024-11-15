import { useState } from 'react'
import './App.css'
import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Services from './components/Services';
import ContactUsSection from './components/ContactUs';
import ProjectSection from './components/AboutUs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-white ">
      <Navbar />
      <Element name="services">
        <Services />
      </Element>
      <Element name="aboutUs">
        <ProjectSection />
      </Element>
      <ContactUsSection />
      <Element name="contactUs">
      </Element>
    </div>
  )
}

export default App
