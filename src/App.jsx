import React from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Expericence/Experience'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import BlurBlob from './BlurBlob'
import FireCursor from "./FireCursor";


  

function App() {

 return (
  <>
 <FireCursor />
  <div className="bg-[#06080d] text-white min-h-screen relative overflow-x-hidden">
    
    {/* Background Effects */}
    <BlurBlob 
      position={{ top: '35%', left: '20%' }} 
      size={{ width: '30%', height: '40%' }} 
    />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db1f_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db1f_1px,transparent_1px)] bg-size-[14px_24px] opacity-20"></div>

    {/* Content */}
    <div className="relative pt-20 z-10">
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Education />
      <Contact />
    </div>

  </div>
  </>
);
}


export default App