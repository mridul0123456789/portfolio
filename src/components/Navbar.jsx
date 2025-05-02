import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav 
      className="flex justify-between items-center p-6 bg-gray-800 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-blue-400">Mridul Shukla</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-300">About</a>
        <a href="#skills" className="hover:text-blue-300">Skills</a>
        <a href="#gallery" className="hover:text-blue-300">Gallery</a>
        <a href="#contact" className="hover:text-blue-300">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
