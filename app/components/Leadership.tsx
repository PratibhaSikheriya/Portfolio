"use client";
import { motion } from "framer-motion";
import { Users, Heart, Megaphone, Lightbulb } from "lucide-react";

export default function Leadership() {
  const activities = [
    {
      role: "Head",
      org: "Shaurya: The Sports Committee",
      date: "Dec 2022 - Present",
      desc: "Led the design and coordination of sports events. Managed branding and promotional strategies to enhance student engagement.",
      icon: <Megaphone className="w-8 h-8 text-red-400" />
    },
    {
      role: "Member",
      org: "Unnat Bharat Abhiyan (NSS)",
      date: "Jan 2023 - Present",
      desc: "Organized 3+ sanitation drives and health awareness campaigns to promote rural community development.",
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      role: "Executive",
      org: "Sahyog: The Mentorship Club",
      date: "Apr 2024",
      desc: "Mentored 10+ junior students through workshops, fostering their academic and personal growth.",
      icon: <Heart className="w-8 h-8 text-pink-400" />
    },
    // NEW PLACEHOLDER
    {
      role: "Community Growth",
      org: "Future Initiatives",
      date: "Always Active",
      desc: "Constantly looking for new ways to volunteer, lead, and give back to the tech community.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500/50" />,
      isPlaceholder: true
    }
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Leadership & <span className="text-purple-500">Volunteering</span></h2>
          <p className="text-gray-400">Beyond the Code: My contributions to campus life</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl transition-colors border 
                ${item.isPlaceholder 
                  ? "bg-transparent border-dashed border-gray-700" 
                  : "bg-black border-zinc-800 hover:border-purple-500/50"}`}
            >
              <div className="mb-4 bg-zinc-900 p-3 rounded-full w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className={`${item.isPlaceholder ? "text-gray-500" : "text-purple-400"} text-sm mb-2`}>{item.org}</p>
              <p className="text-gray-500 text-xs mb-4">{item.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}