import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h3 
          className="text-3xl font-bold mb-8 text-blue-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-300 mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          I'm always excited to connect! Feel free to reach out via email OR whatsapp me on '+919026779213'
        </motion.p>
        <a 
          href="mailto:mriduletwppu@gmail.com" 
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
