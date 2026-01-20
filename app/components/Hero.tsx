"use client";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      
      {/* Main Grid: Text on Left, Astronaut on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl px-6 z-10">
        
        {/* Left Side: Text Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Dream. Build. <br />
            <span className="text-purple-500">Achieve.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Hi, I'm Pratibha. This is my portfolio showcasing my projects and skills in web development and design.
          </p>
          <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition">
            Contact Me
          </button>
        </motion.div>

        {/* Right Side: 3D Astronaut */}
        <div className="h-[500px] w-full hidden md:block">
          {/* We use a container div to control the size properly */}
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>

      </div>
    </div>
  );
}