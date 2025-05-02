import { motion } from "framer-motion";

function Skills() {
  const skills = ["Python", "Web Development"];

  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-400">Skills</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-gray-700 rounded-xl p-6 w-48 text-center hover:scale-110 transform transition cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <h4 className="text-xl font-semibold">{skill}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
