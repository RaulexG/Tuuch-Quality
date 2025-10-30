
import React from 'react';
import { motion } from 'framer-motion';
import { Film, Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <section id="historia" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Film className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ecos del Futuro
            </h2>
          </div>
          <p className="text-xl text-gray-300">Nuestra Inspiración y Compromiso</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden border border-blue-500/30"
          >
            <div className="p-8 lg:p-12">
              <div className="flex items-start mb-8">
                <Heart className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  "Tuuch Quality es más que un proyecto tecnológico; es una narrativa. Nace de la necesidad de visibilizar la crisis que viven nuestros ríos y la esperanza que representa la innovación chiapaneca. Nuestro cortometraje 'Ecos del Futuro' busca mover conciencias y mostrar el poder de la unión entre ciencia y compromiso social."
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video">
                <iframe 
                  className="w-full h-full absolute top-0 left-0"
                  src="https://www.youtube.com/embed/PABqDhzJaNM" 
                  title="Ecos del futuro | Tuuch Quality" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen>
                </iframe>
              </div>

              <div className="mt-8 bg-blue-900/30 border-l-4 border-cyan-400 p-6 rounded-r-lg">
                <p className="text-gray-300 italic">
                  "Cada gota cuenta. Cada dato importa. Cada acción transforma."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
