"use client";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Palette, BrainCircuit } from "lucide-react";

export default function About() {
  const skills = [
    { name: "C++ & Java", icon: <Cpu className="w-8 h-8 text-purple-400" />, level: "Core" },
    { name: "Web Dev (React/Next)", icon: <Globe className="w-8 h-8 text-blue-400" />, level: "Advanced" },
    { name: "Python & AI", icon: <Code2 className="w-8 h-8 text-yellow-400" />, level: "Intermediate" },
    { name: "SQL & Postgres", icon: <Database className="w-8 h-8 text-green-400" />, level: "Database" },
    { name: "Canva & Design", icon: <Palette className="w-8 h-8 text-pink-400" />, level: "Creative" },
    
    // NEW LOADING SKILL
    { name: "New Tech...", icon: <BrainCircuit className="w-8 h-8 text-gray-500 animate-pulse" />, level: "Learning", isPlaceholder: true },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-purple-500">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl transition-all cursor-default group border
                ${skill.isPlaceholder 
                  ? "bg-transparent border-dashed border-gray-800" 
                  : "bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50"}`}
            >
              <div className={`mb-4 p-3 rounded-lg w-fit transition-colors ${skill.isPlaceholder ? "bg-gray-900" : "bg-black/40 group-hover:bg-purple-500/20"}`}>
                {skill.icon}
              </div>
              <h3 className={`text-xl font-bold mb-1 ${skill.isPlaceholder ? "text-gray-400" : "text-white"}`}>{skill.name}</h3>
              <p className="text-gray-500 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}