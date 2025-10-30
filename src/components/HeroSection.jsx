import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
       <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at top right, rgba(0, 122, 255, 0.3), transparent 40%), radial-gradient(circle at bottom left, rgba(0, 255, 255, 0.3), transparent 40%)` }}></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Damos una Voz al Agua
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Conoce <span className="font-semibold text-cyan-400">Tuuch Quality</span>: El sistema de monitoreo en tiempo real nacido en el TecNM que transforma datos en acción y la ciencia en esperanza.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              <a href="#historia">Conoce Nuestra Historia</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#problema" className="text-white animate-bounce block">
            <ChevronDown size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;