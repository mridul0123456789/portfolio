// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4">

    {/* OM background watermark on the right */}
    <div className="absolute right-10 top-1/4 text-[200px] text-white/10 font-extrabold select-none pointer-events-none leading-none">
      ॐ
    </div>

    <motion.img
      src="/gallery/profile.jpg"
      alt="Mridul"
      className="w-40 h-40 rounded-full mb-6 border-4 border-teal-500 object-cover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.h1
      className="text-5xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hey, I'm <span className="text-teal-400">Mridul Shukla</span> 👋
    </motion.h1>
    <motion.p
      className="text-lg text-gray-300 max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Student | Aspiring Engineer | Web Developer
    </motion.p>
    <a
      href="#contact"
      className="mt-8 inline-block bg-teal-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-600 transition"
    >
      Get In Touch
    </a>
  </section>
);

export default Hero;
