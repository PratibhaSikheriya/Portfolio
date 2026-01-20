"use client";
import { Trophy, Star, Medal } from "lucide-react";

export default function Achievements() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Key <span className="text-purple-500">Achievements</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">Rank 5</h3>
                    <p className="text-gray-400">CGBSE State Board (Class 10)</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <Star className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">1,617 Rating</h3>
                    <p className="text-gray-400">LeetCode Competitive Programming</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <Medal className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">Silver Medal</h3>
                    <p className="text-gray-400">Inter-NIT Yoga Competition</p>
                </div>
            </div>
        </div>
    </section>
  );
}