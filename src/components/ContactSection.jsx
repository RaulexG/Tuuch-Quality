
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
    const { toast } = useToast();

    const socialMediaClick = (e) => {
        e.preventDefault();
        toast({
          title: "Función en desarrollo",
          description: "🚧 ¡Esta función aún no está implementada, pero puedes solicitarla en tu próximo mensaje! 🚀",
        });
    }

  return (
    <section id="contacto" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conecta con Nuestro Proyecto
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Tuuch Quality es un proyecto de Sostenibilidad y Cambio Climático, orgullosamente presentado en el InnovaTecNM 2025. ¡Nos encantaría saber de ti!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <a href="https://wa.me/528129625564" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg w-full md:w-auto">
                <Phone className="mr-3 h-6 w-6" />
                Envíanos un WhatsApp
              </Button>
            </a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-blue-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Youtube className="mr-3 text-cyan-400" />
                  Síguenos en Redes
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/tuuchquality?igsh=NGN3cWdwYXNhMmhz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-300 group">
                    <Instagram className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-all duration-300 group">
                    <Facebook className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                   <a href="https://www.youtube.com/@TuuchQuality" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-red-600 transition-all duration-300 group">
                    <Youtube className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="mr-3 text-cyan-400" />
                  Encuéntranos en
                </h3>
                <p className="text-gray-300">
                  Instituto Tecnológico de Tuxtla Gutiérrez,
                  <br />
                  Lib. Sur Pte. 847, Santa Elena, 29060 Tuxtla Gutiérrez, Chis.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30">
              <iframe
                className="w-full h-80"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-93.17094,16.74108,-93.16094,16.74908&layer=mapnik"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
