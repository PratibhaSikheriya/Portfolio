"use client";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    // Added ID="home" for the Navbar to find it
    <section id="home" className="h-screen w-full bg-black bg-[url('https://grainy-gradients.vercel.app/noise.svg')] relative flex items-center justify-center overflow-hidden">
      
      {/* The Purple Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-black z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border border-purple-500 rounded-full bg-purple-500/10 text-purple-400 text-sm font-mono">
            Full Stack Developer & Researcher
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Pratibha Sikheriya
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
            Final Year IT @ <b>NIT Raipur</b>. <br />
            Building AI Chatbots, Quantum Security, and Mobile Apps.
          </p>
          
          <div className="flex gap-4">
            <a href="mailto:pratibhasikheriya19@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition">
              Hire Me
            </a>
            <a href="/resume.pdf" download className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition flex items-center gap-2">
              <Download className="w-5 h-5" /> Resume
            </a>
          </div>
        </motion.div>

        <div className="h-[500px] w-full hidden md:block relative z-20">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}