import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="../../public/img/logo.svg" alt="Tuuch Quality" className="h-10 w-auto" />
              <span className="text-xl font-bold">Tuuch Quality</span>
            </div>
            <p className="text-gray-400">
              Damos una voz al agua a través de tecnología innovadora y compromiso social.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#problema" className="text-gray-400 hover:text-cyan-400 transition-colors">Problema</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-cyan-400 transition-colors">Solución</a></li>
              <li><a href="#equipo" className="text-gray-400 hover:text-cyan-400 transition-colors">Equipo</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Proyecto</h4>
            <p className="text-gray-400 mb-2">InnovaTecNM 2025</p>
            <p className="text-gray-400 mb-2">Categoría: Sostenibilidad y Cambio Climático</p>
            <p className="text-gray-400">Instituto Tecnológico de Tuxtla Gutiérrez</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 mx-2 text-red-500" /> por el equipo Tuuch Quality © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;