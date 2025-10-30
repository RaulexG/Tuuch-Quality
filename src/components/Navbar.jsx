import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Inicio',
    href: '#hero'
  }, {
    name: 'Problema',
    href: '#problema'
  }, {
    name: 'Solución',
    href: '#solucion'
  }, {
    name: 'Equipo',
    href: '#equipo'
  }, {
    name: 'Historia',
    href: '#historia'
  }, {
    name: 'Contacto',
    href: '#contacto'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="../../public/img/logo.svg" alt="Tuuch Quality Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">Tuuch Quality</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                {link.name}
              </a>)}
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden mt-4 pb-4 bg-slate-900 rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
              <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</a>
              </Button>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;