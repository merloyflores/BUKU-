"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle, FileText, ExternalLink } from 'lucide-react';

const certificaciones = [
  {
    title: "Consultor Ambiental Senior",
    entidad: "SETENA / Colegio de Biólogos",
    id: "Reg-2026-BA",
    desc: "Acreditación oficial para la elaboración de EsIA y Pronósticos de Plan de Gestión Ambiental.",
    icon: <Award className="text-bukue-primary" size={40} />
  },
  {
    title: "Especialista en Salud Ocupacional",
    entidad: "Consejo de Salud Ocupacional (CSO)",
    id: "Lic-SO-8842",
    desc: "Certificación para el diseño y firma de Planes de Emergencia y Salud Ocupacional a nivel nacional.",
    icon: <FileText className="text-bukue-primary" size={40} />
  },
  {
    title: "Gestor de Residuos Autorizado",
    entidad: "Ministerio de Salud de Costa Rica",
    id: "MS-GR-004",
    desc: "Capacidad legal para el diseño de centros de acopio y rutas de recolección de residuos ordinarios y peligrosos.",
    icon: <CheckCircle className="text-bukue-primary" size={40} />
  }
];

export default function CertificacionesPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section con Fondo de Hojas */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/HojasFondo4.jpg" 
            alt="Fondo Certificaciones" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-bukue-dark mb-6 tracking-tighter"
          >
            Respaldo <br /><span className="text-bukue-primary">Técnico.</span>
          </motion.h1>
          <p className="text-xl text-gray-600 font-medium">
            Nuestras credenciales no son solo documentos; son el compromiso legal y profesional que adquirimos con el éxito de su proyecto.
          </p>
        </div>
      </section>

      {/* Grid de Certificaciones */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {certificaciones.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-6 bg-bukue-accent rounded-full group-hover:bg-green-400 group-hover:text-white transition-all duration-500 shadow-inner">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-black text-bukue-dark mb-2">{cert.title}</h3>
              <p className="text-bukue-primary font-bold text-sm mb-4">{cert.entidad}</p>
              <div className="bg-gray-50 px-4 py-1 rounded-full text-[10px] font-mono text-gray-400 mb-6 border border-gray-100">
                REGISTRO: {cert.id}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {cert.desc}
              </p>
              <button className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-bukue-dark border-b-2 border-bukue-primary pb-1 hover:text-bukue-primary transition-colors">
                Ver Credencial <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Frase de Cierre */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-[4rem] bg-gray-50 border border-dashed border-gray-200">
          <h2 className="text-3xl font-black text-bukue-dark mb-6">¿Requiere una certificación específica?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Contamos con una red de aliados técnicos en ingeniería civil, geología e hidrología para cubrir cualquier requerimiento legal de su obra.
          </p>
          <button className="bg-bukue-dark text-white px-10 py-4 rounded-2xl font-bold hover:bg-bukue-primary transition-all shadow-lg">
            Consultar Alcance Técnico
          </button>
        </div>
      </section>
    </div>
  );
}