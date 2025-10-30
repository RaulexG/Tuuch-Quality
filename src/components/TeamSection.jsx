import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
const TeamSection = () => {
  return <section id="equipo" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            La Mente y el Corazón de Tuuch Quality
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Nuestro Equipo</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Somos un equipo multidisciplinario de estudiantes y asesores del <span className="font-semibold text-cyan-400">Instituto Tecnológico de Tuxtla Gutiérrez</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Unimos talentos de <span className="font-semibold">Ingeniería Bioquímica, Gestión Empresarial, Sistemas y Electrónica</span> para crear una solución real, accesible y chiapaneca a un problema nacional y global.
                </p>
              </div>

              <div className="relative h-96 lg:h-auto">
                <img src="../../public/img/Equipo.jpg" alt="Equipo multidisciplinario de Tuuch Quality del TecNM" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default TeamSection;