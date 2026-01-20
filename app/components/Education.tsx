"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

export default function Education() {
  const educationData = [
    { degree: "B.Tech in IT", institution: "NIT Raipur", year: "2026", score: "CGPA: 8.75", icon: <GraduationCap className="text-purple-400" /> },
    { degree: "Class XII", institution: "Sant Dnyaneshwar School", year: "2022", score: "89.4%", icon: <BookOpen className="text-blue-400" /> },
    { degree: "Class X", institution: "Sant Dnyaneshwar School", year: "2020", score: "98.33% (Rank 5)", icon: <School className="text-green-400" /> },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My <span className="text-purple-500">Education</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-all text-center"
            >
              <div className="mb-4 bg-black p-4 rounded-full w-fit mx-auto shadow-lg shadow-purple-500/10">
                <div className="w-8 h-8">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.institution}</p>
              <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 font-mono text-sm border border-purple-500/20">
                {item.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}