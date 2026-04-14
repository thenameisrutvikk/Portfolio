import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Rutvik (1).png";



function About() {
  return (
     <section
      id="about"
      className="py-4 px-6 md:px-10 lg:px-16 font-sans mt-16 md:mt-24 lg:mt-32 max-w-7xl mx-auto"

    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rutvik More
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#d1d5db] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
  sequence={[
    " SOFTWARE DEVELOPER INTERN",
    1500,
    "FULL STACK DEVELOPER",
    1500,
    "JAVA + MERN DEVELOPER",
    1500,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>

          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Motivated full-stack developer with strong skills in Java and the
            MERN stack, backed by internship experience at COJAG Smart
            Technology. I build responsive interfaces, secure backend APIs, and
            database-driven applications with a focus on performance,
            maintainability, and clean user experience.
          </p>
          {/* Resume Button */}
          <a
            href="/RUTVIKMORE-Resume.pdf"
            download="RUTVIKMORE-Resume.pdf"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #374151, #9ca3af)',
              boxShadow: '0 0 2px #9ca3af, 0 0 8px #9ca3af, 0 0 28px rgba(156,163,175,0.7)',
            }}
          >
            DOWNLOAD RESUME
          </a>
          
        </div>
        {/* Right Side */}
       <div className="flex-1 flex justify-center md:justify-end md:ml-8 lg:ml-16">


          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-gray-500 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rutvik More"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(156,163,175,0.45)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About