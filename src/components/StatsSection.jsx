"use client";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";
export default function StatsSection() {
  const stats = [
    { icon: Users, title: "Total Matches", value: "74" },
    { icon: Trophy, title: "Team", value: "10" },
    { icon: Calendar, title: "Tournament Duration", value: "65 days" },
    { icon: TrendingUp, title: "Highest score", value: "286/6" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blu-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 1 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 0.5 }}
        >
          IPL 2025 Stats and Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((items, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center "
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 2, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, x: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-medium mb-2">{items.title}</h3>
              <p className="text-3xl font-bold">{items.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
