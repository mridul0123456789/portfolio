import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-400">:PROJECTS:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.img 
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
