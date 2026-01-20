"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, PlusCircle } from "lucide-react";

export default function Experience() {
  const workData = [
    {
      role: "Research Intern (NLP)",
      company: "Rajiv Gandhi Institute of Petroleum Technology",
      date: "May 2024 - Jul 2024",
      description: "Analyzed Big Tech's influence in NLP research. Quantified a 180% surge in industry-affiliated papers using Python & Data Analytics.",
    },
    {
      role: "Web Development Intern",
      company: "Bharat Intern",
      date: "2024",
      description: "Developed responsive web applications including a Bakery Website using HTML, CSS, and JavaScript.",
    },
    {
      role: "Software Intern",
      company: "Octanet Services",
      date: "May 2024",
      description: "Worked on improving UI/UX for web platforms and creating landing pages.",
    },
    // NEW FUTURE NODE
    {
      role: "Your Company Next?",
      company: "Open to Work",
      date: "Future",
      description: "Always learning and ready to take on new challenges in Software Development. Let's build something great together!",
      isPlaceholder: true
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-12 text-center">
          Work <span className="text-purple-500">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-10 space-y-12">
          {workData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot Logic: Hollow dot for placeholder */}
              <span className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 
                ${item.isPlaceholder ? "bg-black border-gray-600" : "bg-black border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"}`}>
              </span>
              
              <div className={`p-8 rounded-2xl transition-all border 
                ${item.isPlaceholder 
                  ? "border-dashed border-gray-700 bg-transparent text-gray-400" 
                  : "bg-zinc-900/40 backdrop-blur-md border-white/10 hover:border-purple-500/50 hover:bg-zinc-900/60"}`}>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${item.isPlaceholder ? "text-gray-300" : "text-white"}`}>
                    {item.isPlaceholder ? <PlusCircle className="w-5 h-5"/> : <Briefcase className="w-5 h-5 text-purple-400"/>}
                    {item.role}
                  </h3>
                  <span className="flex items-center text-sm text-gray-500 mt-1 md:mt-0 font-mono">
                    <Calendar className="w-4 h-4 mr-1" /> {item.date}
                  </span>
                </div>
                <p className={`${item.isPlaceholder ? "text-gray-500" : "text-purple-400"} text-sm font-semibold mb-4`}>{item.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}