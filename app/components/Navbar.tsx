"use client";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", icon: <Home className="w-5 h-5" />, href: "#home" },
    { name: "About", icon: <User className="w-5 h-5" />, href: "#about" },
    { name: "Experience", icon: <Briefcase className="w-5 h-5" />, href: "#experience" },
    { name: "Projects", icon: <Code className="w-5 h-5" />, href: "#projects" },
    { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-6 bg-zinc-900/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-lg shadow-purple-500/10">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.href}
            className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 rounded-full hover:bg-white/10"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </motion.div>
  );
}