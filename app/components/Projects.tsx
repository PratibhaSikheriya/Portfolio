"use client";
import { motion } from "framer-motion";
import { Github, Code2, Database, Lock, ShoppingBag, Fingerprint, Music, Layout, Briefcase, Loader2, Sparkles } from "lucide-react";

export default function Projects() {
  // THE 8 MAIN PROJECTS ONLY
  const projects = [
    { title: "Lokal Music Player", tech: "React Native, Expo", icon: <Music className="text-pink-400" />, description: "Mobile music player with local file scanning and background playback.", link: "#", isRepo: false },
    { title: "Quantum Security", tech: "Cryptography, Research", icon: <Lock className="text-purple-400" />, description: "Implemented QAESS-SR using Steane QECC and trap codes.", link: "#", isRepo: false },
    { title: "Web LLM Chatbot", tech: "React, WebGPU", icon: <Code2 className="text-blue-400" />, description: "100% on-device AI chatbot. Privacy focused with zero server latency.", link: "#", isRepo: false },
    { title: "Sales Dashboard", tech: "Power BI, SQL", icon: <Database className="text-green-400" />, description: "Visualized 10k+ sales records. Improved campaign effectiveness by 18%.", link: "#", isRepo: false },
    { title: "Aadhar Validation", tech: "JS, RegEx", icon: <Fingerprint className="text-teal-400" />, description: "Client-side verification tool for Indian ID data integrity.", link: "https://github.com/PratibhaSikheriya/aadhar-card-validation", isRepo: true },
    { title: "Bakery Website", tech: "HTML5, CSS3", icon: <ShoppingBag className="text-yellow-400" />, description: "Responsive frontend design for a local bakery shop.", link: "https://github.com/PratibhaSikheriya/Bakery-Website", isRepo: true },
    { title: "Octanet Project", tech: "Web Dev", icon: <Layout className="text-indigo-400" />, description: "Landing pages and UI components built during internship.", link: "https://github.com/PratibhaSikheriya/OCTANET_MAY", isRepo: true },
    { title: "Bharat Intern", tech: "Frontend", icon: <Briefcase className="text-orange-400" />, description: "Collection of web modules designed during training.", link: "https://github.com/PratibhaSikheriya/Bharat-Intern", isRepo: true },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-purple-500">Projects</span></h2>
        </motion.div>

        {/* THE GRID (Exactly 8 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.05 }}
              className="bg-zinc-900/30 border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 hover:bg-zinc-900/80 transition-all flex flex-col h-full backdrop-blur-sm"
            >
              <div className="mb-4 bg-white/5 p-3 rounded-xl w-fit group-hover:bg-purple-500/20">
                 <div className="w-8 h-8">{project.icon}</div>
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-purple-400 text-xs font-mono mb-3">{project.tech}</p>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

              {project.isRepo ? (
                <a href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                  <Github className="w-4 h-4" /> View Code
                </a>
              ) : (
                <span className="text-gray-600 text-xs italic">Internal Research</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* THE SEPARATE "COMING SOON" BOX BELOW */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl mx-auto mt-16 p-8 rounded-3xl border-2 border-dashed border-gray-800 bg-zinc-950/50 flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/30 transition-all"
        >
            {/* Glow Effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-all"></div>
            
            <div className="relative z-10">
                <div className="bg-zinc-900 p-4 rounded-full w-fit mx-auto mb-4 border border-white/10">
                    <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
                </div>
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                    Working on Next... <Sparkles className="w-5 h-5 text-yellow-500" />
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                    Currently brainstorming and building the next big project. 
                    Always learning new technologies to solve real-world problems.
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
}