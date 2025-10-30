import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Droplet, TrendingDown, DollarSign } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Droplet className="w-12 h-12 text-red-500" />,
      stat: "92%",
      title: "de Municipios",
      description: "Sin Plantas de Tratamiento (PTAR) activas o funcionales"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-orange-500" />,
      stat: "50.9%",
      title: "de Sitios",
      description: "Reportan 'mala calidad' del agua"
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-yellow-500" />,
      stat: "Obsoletos",
      title: "Métodos Tradicionales",
      description: "El monitoreo es lento, costoso y reactivo"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      stat: "+$40M",
      title: "en Multas",
      description: "Más de 112 clausuras por incumplimientos"
    }
  ];

  return (
    <section id="problema" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            La Realidad Oculta del Agua en México
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all border border-blue-500/30"
            >
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {problem.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;