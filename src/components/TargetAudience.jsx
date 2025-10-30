import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Droplets, Shield } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Building2 className="w-12 h-12 text-cyan-400" />,
      title: "Gobiernos Municipales",
      description: "Soluciones para la gestión eficiente del agua en tu municipio"
    },
    {
      icon: <Factory className="w-12 h-12 text-cyan-400" />,
      title: "Empresas Privadas",
      description: "Con responsabilidades hídricas y compromisos ambientales"
    },
    {
      icon: <Droplets className="w-12 h-12 text-cyan-400" />,
      title: "Operadores de PTARs",
      description: "Plantas de Tratamiento de Aguas Residuales"
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Autoridades Reguladoras",
      description: "Organismos ambientales y de control de calidad"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Una Solución Diseñada Para
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all border border-blue-500/30"
            >
              <div className="flex justify-center mb-6">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {audience.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;