"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Lightbulb, ArrowRight, BookOpen, Microscope } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="bg-white">
      {/* HERO DE SECCIÓN */}
      <section className="relative h-[60vh] flex items-center bg-bukue-dark overflow-hidden">
        <Image 
          src="/HojasFondo3.jpg" 
          alt="Ingeniería Ambiental" 
          fill 
          className="object-cover opacity-40 grayscale-50"
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-bukue-light font-bold tracking-widest uppercase text-sm"
          >
            Experiencia con Propósito
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mt-4 max-w-3xl"
          >
            Ingeniería que respeta el <span className="text-bukue-light">mañana</span>
          </motion.h1>
        </div>
      </section>

      {/* NUESTRA HISTORIA / VISIÓN */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative h-125 rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="/IngenieroAmbiental.webp" 
                alt="Gestión Ambiental" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Cuadro flotante de experiencia */}
            <div className="absolute -bottom-10 -right-10 bg-bukue-primary p-8 rounded-3xl text-white shadow-2xl z-20 hidden md:block">
              <span className="text-4xl font-black block">+98%</span>
              <span className="text-sm uppercase tracking-tighter opacity-80">Viabilidad SETENA</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-bukue-dark leading-tight">
              Más que consultores, somos arquitectos de <span className="text-bukue-primary">cumplimiento sostenible.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              En **BUKUË**, nacimos de la necesidad de cerrar la brecha entre el desarrollo industrial y la preservación ecológica en Costa Rica. No vemos las normativas ambientales como obstáculos, sino como la base de un negocio sólido y resiliente.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: <Target className="text-bukue-primary" />, title: "Precisión Técnica", desc: "Datos exactos para decisiones corporativas seguras." },
                { icon: <Users className="text-bukue-primary" />, title: "Cercanía Institucional", desc: "Expertos en la gestión efectiva ante SETENA, Ministerio de Salud y AyA." },
                { icon: <Microscope className="text-bukue-primary" />, title: "Innovación", desc: "Aplicamos las últimas tecnologías en tratamiento de aguas y gestión de residuos." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-bukue-accent transition-colors border border-transparent hover:border-bukue-primary/10">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-bukue-dark">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE DE SECCIÓN E INVITACIÓN AL BLOG */}
      <section className="py-24 bg-bukue-accent">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-xl border border-bukue-primary/5 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative h-75 w-full rounded-4xl overflow-hidden">
               <Image 
                src="/EducacionAmbiental.jpg" 
                alt="Oficinas BUKUE" 
                fill 
                className="object-cover"
              />
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <span className="text-bukue-primary font-bold flex items-center gap-2">
                <Lightbulb size={20} /> Conocimiento compartido
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-bukue-dark">
                Nuestra misión va más allá de la asesoría; queremos <span className="text-bukue-primary">educar</span>.
              </h2>
              <p className="text-gray-600 text-lg">
                Creemos que un cliente informado es un aliado del planeta. Por eso, documentamos nuestras experiencias, cambios en la legislación y guías técnicas en nuestro espacio de divulgación.
              </p>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-bukue-dark text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-lg hover:bg-bukue-primary transition-all"
                >
                  <BookOpen size={20} /> Visitar nuestro Blog <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}