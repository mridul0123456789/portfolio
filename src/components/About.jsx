import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3 
          className="text-3xl font-bold mb-8 text-blue-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          I am an 18-year-old passionate student from Jaunpur, UP (India). 
          I completed my schooling at St. John's School (ICSE Board) and am currently preparing for JEE at Allen Kota. 
          I love Python programming and Web Development, and I'm building my dream one step at a time!
        </motion.p>
      </div>
    </section>
  );
}

export default About;
