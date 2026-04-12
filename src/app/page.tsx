"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Route, Zap } from 'lucide-react';
import { ArrowRight, Target, Leaf, BarChart3, ShieldCheck, FileText, Droplets, Trash2, GraduationCap, Building2, Award } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";


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
          src="/HojasSuperiores_SinFondo.png"
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
    <div className="flex flex-col gap-20 bg-white">
    {/* HERO SECTION - Usando tus molinos eólicos */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
        <Image 
          src="/HojasFondo2.jpg" 
          alt="Energía Eólica Costa Rica" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay para lectura */}
        
        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LADO IZQUIERDO: TEXTOS */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Sostenibilidad que genera <span className="text-bukue-light">Rentabilidad</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xl text-gray-100 max-w-xl font-light"
              >
                En <b className='font-bold'>BUKU<span className="text-shadow-bukue-primary">Ë</span></b> creemos que la rentabilidad y la ecología son complementarias. Construimos un futuro donde tu empresa crece y el planeta prospera.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex gap-4"
              >
                <a href="/contacto" className="bg-bukue-primary hover:bg-bukue-light text-white hover:text-bukue-dark px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  Iniciar Proyecto <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>

            {/* LADO DERECHO: LOGO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex justify-end"
            >
              <Image 
                src="/LOGO_BUKUE_sin fondo.png"
                alt="Bukuë Logo"
                width={350} 
                height={150}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

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
      <section id="servicios" className="bg-bukue-accent py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          
        {/* Encabezado de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 px-4"
        >
          {/* 1. Badge Estilizado */}
          <div className="inline-flex items-center gap-2 bg-bukue-accent/50 border border-bukue-primary/20 px-4 py-2 rounded-full mb-6">
            <Leaf size={16} className="text-bukue-primary animate-pulse" />
            <span className="text-bukue-primary font-bold tracking-widest uppercase text-xs">
              Nuestra Experiencia
            </span>
          </div>

          {/* 2. Título con Resaltado Dinámico */}
          <h2 className="text-bukue-dark text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
            Soluciones <span className="text-bukue-primary">Integrales</span> para su Empresa
          </h2>

          {/* 3. Línea Decorativa y Descripción */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-1.5 bg-bukue-primary rounded-full mb-8" />
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
              Brindamos consultoría técnica especializada para transformar sus desafíos 
              normativos en <span className="font-semibold text-bukue-dark">ventajas competitivas</span> sostenibles.
            </p>
          </div>
        </motion.div>

          {/* Grid de Servicios usando .map() para código limpio */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "tramitologia",
                icon: <FileText size={28} />,
                title: "Tramitología",
                desc: "Contamos con amplia experiencia en tramitología ante instituciones. Simplificá procesos regulatorios, asegurandoquetuempresacumplaconlanormativa vigente, así evita sanciones, acelera procesos de permisosypermiteconcentrarseenelcrecimientodel negocio sin complicaciones administrativas. Además contamosconelrespaldoyexperienciaprofesionalde masde10añosenestosservicios.",
                items: [
                  "Viabilidades Ambientales.",
                  "Permisos para sistemas de tratamiento de AR.",
                  "Concesiones de aprovechamiento de agua.",
                  "Planes de gestión integral de residuos sólidos."
                ]
              },
              {
                id: "certificaciones",
                icon: <Award size={28} />,
                title: "Certificaciones",
                desc: "Obtener certificaciones de calidad y o ambientales a través de consultoría especializada impulsa la confianza del cliente y mejora la eficiencia operativa. Además,teposicionacomounaempresacompetitiva que	cumple	con	estándares	internacionales, generandonuevasoportunidadesdenegocio.",
                items: [
                  "Bandera Azul Ecológica.",
                  "Certificación de sostenibilidad turística.",
                  "ISO 9001, 14001.",
                  "Carbono Neutral.",
                  "Inventario de gases de efecto invernadero."
                ]
              },
              {
                id: "soluciones",
                icon: <Droplets size={28} />,
                title: "Soluciones",
                desc: "Nuestra guía y experiencia en solucionar problemáticas	ambientales	permite identificar y mitigar riesgos ecológicos, reduciendo el impacto ambiental de tus operaciones. Esto no solo protege los recursos naturales, sino que también mejora la imagen pública de la empresa y garantizalacontinuidaddesuoperación. ",
                items: [
                  "Planes de Gestión Integral de Residuos Solidos.",
                  "Diseño y Construcción de Biojardineras.",
                  "Diseño y Contrucción de Biojardineras para tratamientos de Aguas Residuales.",
                  "Diseños de Jardines de Polinizadores y para Atracción de Aves."
                ]
              },
              {
                id: "educacion",
                icon: <GraduationCap size={28} />,
                title: "Educación Ambiental",
                desc: "La educación ambiental fortalece la responsabilidad social de tu empresa, fomentando una cultura organizacional que entiende y respeta el medio ambiente. Educar al personal reduce riesgos, mejora la eficiencia y fortalece la reputación de la marca.",
                items: [
                  "Charlas de sensibilización en temas de recurso hídrico.",
                  "Capacitaciones en compostaje.",
                  "Capacitaciones en recuperación de materiales.",
                  "Charla de Sensibilización en Cambio Climático."
                ]
              },
              {
                id: "salud",
                icon: <Building2 size={28} />,
                title: "Salud Ocupacional",
                desc: "Invertir en salud ocupacional reduce accidentes y optimiza costos. Creamos entornos laborales seguros y saludables.",
                items: [
                  "Conformación de brigadas y comisiones.",
                  "Planes de emergencia y capacitaciones."
                ]
              },
              {
                id: "integral",
                icon: <Target size={28} />, // Asegúrate de importar 'Target' o 'Shield' de lucide-react
                title: "Gestión Ambiental 360°",
                desc: "Integramos todos nuestros servicios en una estrategia unificada. Desde la tramitología hasta la salud ocupacional, somos su departamento ambiental externo.",
                items: [
                  "Diagnóstico inicial de necesidades.",
                  "Estrategia corporativa a la medida.",
                  "Acompañamiento técnico continuo."
                ]
              }
            ].map((servicio, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-8 rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden group border ${
                  servicio.id === "integral" 
                    ? "bg-bukue-dark text-white border-bukue-dark hover:shadow-bukue-primary/30" 
                    : "bg-white text-gray-600 border-gray-100"
                }`}
                >
                {/* Círculo decorativo sutil en la esquina superior */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-bukue-accent/50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out -z-10" />

                {/* Icono animado */}
                <div className="w-16 h-16 bg-bukue-accent rounded-2xl flex items-center justify-center text-bukue-primary mb-6 group-hover:bg-bukue-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {servicio.icon}
                </div>

                <div className="relative mb-4">
                  <h3 className={`text-2xl font-black transition-all duration-300 group-hover:pl-4 ${
                    servicio.id === "integral" 
                      ? "text-white group-hover:text-gray-300" // Blanco en oscuro, gris en hover
                      : "text-bukue-dark group-hover:text-bukue-primary" // Normal
                  }`}>
                    {servicio.title}
                  </h3>
                  
                  {/* Línea decorativa lateral: Blanca para la tarjeta oscura */}
                  <div className={`absolute left-0 top-0 h-full w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom ${
                    servicio.id === "integral" ? "bg-white" : "bg-bukue-primary"
                  }`} />
                </div>
                
                {/* Párrafo de descripción */}
                <p className={`mb-6 text-sm leading-relaxed transition-colors ${
                  servicio.id === "integral" ? "text-gray-200" : "text-gray-600"
                }`}>
                  {servicio.desc}
                </p>

                {/* Ítems de la lista */}
                <ul className={`space-y-3 text-sm mb-4 transition-colors ${
                  servicio.id === "integral" ? "text-gray-100" : "text-gray-600"
                }`}>
                  {servicio.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight size={16} className={`${
                        servicio.id === "integral" ? "text-white" : "text-bukue-primary"
                      } mt-0.5 shrink-0`} /> 
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de Acción solo para la tarjeta Integral */}
                {servicio.id === "integral" && (
                  <motion.a
                    href="/contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-bukue-primary hover:bg-white text-white hover:text-bukue-dark px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-bukue-primary/20 w-full group/btn"
                  >
                    Solicitar Consultoría 360°
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                )}

                {/* Lógica condicional: Mostrar logos SOLO en la tarjeta de Certificaciones */}
                {servicio.id === "certificaciones" && (
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-4 justify-start">
                    <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 w-14 h-14 relative flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image src="/BanderaAzul.png" alt="Bandera Azul Ecológica" fill className="object-contain p-2" />
                    </div>
                    <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 w-14 h-14 relative flex items-center justify-center group-hover:scale-110 transition-transform delay-75">
                      <Image src="/ISO9001.png" alt="ISO 9001" fill className="object-contain p-2" />
                    </div>
                    <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 w-14 h-14 relative flex items-center justify-center group-hover:scale-110 transition-transform delay-150">
                      <Image src="/co2Neutral.jpg" alt="Carbono Neutral" fill className="object-contain p-1.5 rounded-lg" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
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
                href="https://wa.me/50688017441"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-bukue-dark hover:bg-bukue-light hover:text-white px-10 py-5 rounded-full font-black text-xl transition-colors shadow-xl"
              >
                <IoLogoWhatsapp />
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
