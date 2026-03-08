"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Route, Zap } from 'lucide-react';
import { ArrowRight, Leaf, BarChart3, ShieldCheck, FileText, Droplets, Trash2, GraduationCap, Building2, Award } from 'lucide-react';

const AnimatedLeaves = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed top-0 left-0 w-full z-40 pointer-events-none"
    >
      <div className="relative w-full h-64">
        <Image
          src="/HojasSuperiores_SinFondo.png" // Usando tu imagen cargada
          alt="Hojas decorativas"
          fill
          className="object-contain object-top opacity-80"
        />
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* HERO SECTION - Usando tus molinos eólicos */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <Image 
          src="/HojasFondo2.jpg" 
          alt="Energía Eólica Costa Rica" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay para lectura */}
        
        <div className="container mx-auto px-6 relative z-20 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
          >
            Sostenibilidad que genera <span className="text-bukue-light">Rentabilidad</span>
          </motion.h1>
          <p className="mt-6 text-xl text-gray-100 max-w-2xl font-light">
            En <b className='font-bold'>BUKU<span className="text-shadow-bukue-primary">Ë</span></b> creemos que la rentabilidad y la ecología son complementarias. Construimos un futuro donde tu empresa crece y el planeta prospera.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#contacto" className="bg-bukue-primary hover:bg-bukue-light text-white hover:text-bukue-dark px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
              Iniciar Proyecto <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR */}
      <section id="nosotros" className="container mx-auto px-4 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-bukue-dark text-4xl font-bold mb-6">Tu Aliado Estratégico en Servicios Ambientales</h2>
            <p className="text-gray-600 text-lg mb-4">
              En BUKUË, entendemos que las empresas deben equilibrar sus responsabilidades ecológicas con sus objetivos económicos. 
            </p>
            <p className="text-gray-600 text-lg">
              Trabajamos mano a mano para desarrollar soluciones personalizadas que minimizan el impacto ambiental mientras maximizan la rentabilidad de tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-bukue-accent rounded-2xl border border-bukue-primary/10">
              <Leaf className="text-bukue-primary mb-4" size={32} />
              <h3 className="font-bold text-bukue-dark">Ecología</h3>
            </div>
            <div className="p-6 bg-bukue-accent rounded-2xl border border-bukue-primary/10">
              <BarChart3 className="text-bukue-primary mb-4" size={32} />
              <h3 className="font-bold text-bukue-dark">Economía</h3>
            </div>
            <div className="p-6 bg-bukue-accent rounded-2xl border border-bukue-primary/10">
              <ShieldCheck className="text-bukue-primary mb-4" size={32} />
              <h3 className="font-bold text-bukue-dark">Cumplimiento</h3>
            </div>
            <div className="p-6 bg-bukue-accent rounded-2xl border border-bukue-primary/10">
              <Route className="text-bukue-primary mb-4" size={32} /> 
              <h3 className="font-bold text-bukue-dark">Estrategía</h3>
            </div>
          </div>
        </div>
      </section>

{/* 3. SOLUCIONES INTEGRALES */}
      <section id="servicios" className="bg-bukue-accent py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-bukue-dark text-4xl md:text-5xl font-bold mb-6">Soluciones Integrales</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Ofrecemos consultoría especializada para garantizar que tu empresa cumpla con las normativas, evite sanciones y optimice su operación.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            {/* 1. Tramitología Ambiental */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Tramitología Ambiental</h3>
              <p className="text-gray-600 mb-6 grow">Aseguramos el respaldo legal y ambiental de tu proyecto ante instituciones, evitando sanciones y acelerando tus solicitudes para que no se detenga. Incluye:</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Viabilidad Ambiental para desarrollos de todo tipo.</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Permisos para sistemas de tratamiento de aguas residuales (PTAR).</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Concesiones de aprovechamiento de agua.</li>
              </ul>
            </div>

            {/* 2. Soluciones Técnicas Sostenibles */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <Droplets size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Soluciones Técnicas</h3>
              <p className="text-gray-600 mb-6 grow">Diseño y construcción de sistemas para un manejo eficiente de recursos y tratamiento de efluentes, mitigando riesgos ecológicos. Incluye:</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Diseño y Construcción de Biojardineras.</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Diseño y Construcción de PTAR (Humedales Artificiales).</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Diseños de Jardines de Polinizadores y Atracción de Aves.</li>
              </ul>
            </div>

            {/* 3. Gestión de Residuos */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <Trash2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Gestión de Residuos</h3>
              <p className="text-gray-600 mb-6 grow">Aseguramos un manejo integral y sostenible de los residuos de tu empresa. Incluye:</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Planes de gestión integral de residuos sólidos.</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Capacitaciones en compostaje y separación de materiales.</li>
              </ul>
            </div>

            {/* 4. Educación Ambiental */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Educación Ambiental</h3>
              <p className="text-gray-600 mb-6 grow">Capacitaciones que fortalecen la responsabilidad social corporativa y fomentan una cultura organizacional comprometida con el planeta.</p>
              <p className="text-gray-600 font-medium text-sm">Transforma tu cultura organizacional y reduce riesgos.</p>
            </div>

            {/* 5. Salud Ocupacional */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Salud Ocupacional</h3>
              <p className="text-gray-600 mb-6 grow">Invertir en salud ocupacional reduce accidentes y optimiza costos. Creamos entornos laborales seguros y saludables. Incluye:</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Conformación de brigadas y comisiones.</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} /> Planes de emergencia y capacitaciones.</li>
              </ul>
            </div>

            {/* 6. Certificaciones de Calidad */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:shadow-lg">
              <div className="p-3 inline-flex bg-bukue-accent rounded-xl text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-all">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-bukue-dark mb-4">Certificaciones</h3>
              <p className="text-gray-600 mb-6 grow">Consultoría para posicionarte entre los mejores, impulsando la confianza y optimizando tu operación para cumplir con estándares internacionales. Incluye:</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ArrowRight size={14} /> ISO 9001, 14001, Carbono Neutral, Bandera Azul Ecológica.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE CIERRE / CTA */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-linear-to-br from-bukue-dark to-bukue-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Elementos decorativos animados */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-bukue-light/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-bukue-light/20 text-bukue-light px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
                <Zap size={16} /> ¿Listo para el siguiente paso?
              </span>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Hagamos que su proyecto sea <span className="text-bukue-light">referente de éxito</span>
              </h2>
              
              <p className="text-xl text-gray-200 mb-12 font-light">
                No permita que la tramitología o la falta de estrategia ambiental detenga su crecimiento. 
                Nuestro equipo está listo para asesorarle hoy mismo.
              </p>

              <motion.a
                href="https://wa.me/50688017441" // Enlace directo a tu número
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-bukue-dark hover:bg-bukue-light hover:text-white px-10 py-5 rounded-full font-black text-xl transition-colors shadow-xl"
              >
                <MessageCircle size={28} className="text-green-500" />
                Contactar por WhatsApp
              </motion.a>
              
              <p className="mt-8 text-sm text-gray-300 opacity-70">
                Respuesta inmediata • Asesoría personalizada • (506) 8801-7441
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
