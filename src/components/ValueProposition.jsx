import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ValueProposition = () => {
  const challenges = [
    "Análisis lentos y costos inesperados",
    "Falta de control en tiempo real",
    "Riesgo constante de multas y sanciones"
  ];

  const solutions = [
    "Elimina dependencia de laboratorios externos",
    "Alertas tempranas: actúas antes del problema",
    "Genera evidencia válida para el cumplimiento normativo",
    "Seguridad y confianza en la gestión ambiental"
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformamos tus Frustraciones en Soluciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-900/20 border-2 border-red-500/40 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <X className="w-8 h-8 mr-3" />
              Tus Desafíos Actuales
            </h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-900/20 border-2 border-green-500/40 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <Check className="w-8 h-8 mr-3" />
              Las Soluciones Tuuch Quality
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;