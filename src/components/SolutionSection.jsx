import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Droplets, Zap } from 'lucide-react';
const IframeWrapper = ({
  src,
  title
}) => <div className="relative w-full h-full bg-gray-900 flex items-center justify-center flex-grow aspect-video">
    <iframe className="w-full h-full absolute top-0 left-0" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>;
const SolutionSection = () => {
  const parameters = [{
    icon: <Activity className="w-6 h-6" />,
    name: "Oxígeno Disuelto"
  }, {
    icon: <Droplets className="w-6 h-6" />,
    name: "pH"
  }, {
    icon: <Thermometer className="w-6 h-6" />,
    name: "Temperatura"
  }, {
    icon: <Zap className="w-6 h-6" />,
    name: "Turbiedad"
  }, {
    icon: <Activity className="w-6 h-6" />,
    name: "ORP"
  }];
  const galleryItemClasses = "bg-slate-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-blue-500/30 flex flex-col";
  const imageClasses = "w-full h-full object-cover";
  const captionClasses = "p-4 bg-slate-800";
  return <section id="solucion" className="py-20 bg-slate-800">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestra Solución: Evidencia en Acción
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tuuch Quality es un sistema de monitoreo inteligente que mide parámetros clave y los envía a una plataforma digital accesible, permitiendo una acción proactiva para la sostenibilidad ambiental.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {parameters.map((param, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} className="flex items-center space-x-2 bg-blue-500/20 text-cyan-300 px-4 py-2 rounded-full border border-blue-400/30">
              {param.icon}
              <span className="font-medium">{param.name}</span>
            </motion.div>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <motion.div className={`${galleryItemClasses} lg:col-span-2`}>
            <IframeWrapper src="https://www.youtube.com/embed/gNl5_-3-eWw" title="Tuuch Quality: El Futuro del Monitoreo de la Calidad del Agua" />
            <div className={captionClasses}><h4 className="font-semibold text-white">El futuro del monitoreo</h4><p className="text-sm text-gray-400"></p></div>
          </motion.div>

          <motion.div className={galleryItemClasses}>
            <IframeWrapper src="https://www.youtube.com/embed/wMQSE6J2jXg" title="Muestreo convencional para el análisis de la calidad del agua" />
            <div className={captionClasses}><h4 className="font-semibold text-white">Análisis y muestreo</h4><p className="text-sm text-gray-400"></p></div>
          </motion.div>

          <motion.div className={galleryItemClasses}>
            <img src="https://horizons-cdn.hostinger.com/f68b653c-3112-427f-89f8-38b768ddbfba/2-Fb3uz.jpg" alt="Panel de Control" className={imageClasses} />
            <div className={captionClasses}><h4 className="font-semibold text-white">Panel de Control</h4><p className="text-sm text-gray-400">Dashboard de análisis</p></div>
          </motion.div>

          <motion.div className={galleryItemClasses}>
             <IframeWrapper src="https://www.youtube.com/embed/HHMx6N9NeUk" title="Polo de investigación Ittg" />
            <div className={captionClasses}><h4 className="font-semibold text-white">Polo de investigación</h4><p className="text-sm text-gray-400"></p></div>
          </motion.div>

          <motion.div className={galleryItemClasses}>
            <img src="https://horizons-cdn.hostinger.com/f68b653c-3112-427f-89f8-38b768ddbfba/3-D78TZ.jpg" alt="Sistema Interno" className={imageClasses} />
            <div className={captionClasses}><h4 className="font-semibold text-white">Sistema Interno</h4><p className="text-sm text-gray-400">Arquitectura de sensores</p></div>
          </motion.div>
          
        </div>
      </div>
    </section>;
};
export default SolutionSection;