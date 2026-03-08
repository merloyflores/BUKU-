"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Users, ClipboardCheck, Siren, ArrowRight, CheckCircle } from 'lucide-react';

const serviciosSalud = [
  {
    title: "Planes de Salud Ocupacional",
    desc: "Desarrollo y registro de planes oficiales según la normativa del Consejo de Salud Ocupacional (CSO).",
    icon: <ShieldCheck className="text-bukue-primary" size={32} />,
    image: "/Planes-Salud-Ocupacional.jpg"
  },
  {
    title: "Brigadas de Emergencia",
    desc: "Capacitación técnica y formación de brigadas contra incendios, primeros auxilios y evacuación.",
    icon: <Siren className="text-bukue-primary" size={32} />,
    image: "/brigadistas_piura_banner.jpg"
  },
  {
    title: "Permisos Sanitarios",
    desc: "Gestión completa para la obtención y renovación de Permisos Sanitarios de Funcionamiento.",
    icon: <ClipboardCheck className="text-bukue-primary" size={32} />,
    image: "/requisitos-para-obtener-permisos.webp"
  }
];

export default function SaludOcupacionalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con Fondo Completo */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        
        {/* Fondo Completo */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/HojasFondo4.jpg" 
            alt="Fondo Ambiental" 
            fill 
            className="object-cover object-center" 
            priority
          />
          {/* Overlay para que el texto sea legible sobre la imagen */}
          <div className="absolute inset-0 backdrop-blur-[6px]" />
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/80 backdrop-blur-md text-bukue-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-bukue-primary/20"
            >
              Seguridad Humana y Legal
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black text-fuchsia-50 mt-6 mb-8 tracking-tighter leading-[0.9]">
              Salud <br /><span className="text-bukue-primary">Ocupacional.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-2xl font-light">
              Transformamos el cumplimiento normativo en una cultura de prevención que protege su activo más valioso: su gente.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios Especializados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {serviciosSalud.map((servicio, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 p-10 group"
              >
                <div className="mb-8 p-4 bg-bukue-accent rounded-2xl w-fit group-hover:bg-green-300 group-hover:text-white transition-colors duration-500">
                  {servicio.icon}
                </div>
                <h3 className="text-2xl font-bold text-bukue-dark mb-4">{servicio.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{servicio.desc}</p>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-8">
                  <Image src={servicio.image} alt={servicio.title} fill className="object-cover" />
                </div>
                <button className="flex items-center gap-2 font-black text-bukue-dark group/btn">
                  Más información <ArrowRight size={18} className="text-bukue-primary transition-transform group-hover/btn:translate-x-2" />
                </button>
              </motion.div>
            )
          )
        } 
          </div>
        </div>
      </section>

      {/* Checklist de Cumplimiento */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-bukue-dark rounded-[4rem] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Garantizamos el cumplimiento <span className="text-bukue-primary">100% legal</span> ante el Ministerio de Salud.
              </h2>
              <div className="space-y-4">
                {["Inspecciones Físico-Sanitarias", "Evaluación de Riesgos", "Gestión de Residuos Bioinfecciosos", "Protocolos de Emergencia"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-bukue-primary" size={20} />
                    <span className="font-bold text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative h-100 w-full rounded-[3rem] overflow-hidden">
               <Image 
                src="/Seguridad.jpg" 
                alt="Seguridad" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}