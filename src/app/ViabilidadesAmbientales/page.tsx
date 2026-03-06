"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FileCheck, Droplets, HardHat, ClipboardList, ArrowRight, X, CheckCircle2, Clock, FileText } from 'lucide-react';

// 1. DATA DETALLADA PARA LOS MODALES
const infoDetallada = {
  "SETENA & Viabilidad Ambiental": {
    puntos: [
      "Elaboración de Formulario D1 y D2 según la categoría del proyecto.",
      "Confección de Pronósticos de Plan de Gestión Ambiental (P-PGA).",
      "Gestión de Declaraciones Juradas de Compromisos Ambientales.",
      "Seguimiento técnico de expedientes ante la plataforma digital de SETENA."
    ],
    tiempo: "Depende de la categoría (A, B1, B2, C).",
    requisito: "Plano catastrado y certificación de uso de suelo."
  },
  "Gestión de Recurso Hídrico": {
    puntos: [
      "Trámites de disponibilidad de agua ante AyA y ASADAS.",
      "Diseño y visado de sistemas de tratamiento de aguas residuales.",
      "Solicitud de permisos de vertido y reúso de agua.",
      "Elaboración de protocolos de muestreo de calidad de agua."
    ],
    tiempo: "22 a 45 días hábiles.",
    requisito: "Ubicación geográfica exacta y estimación de caudales."
  },
  "Salud & Seguridad Ocupacional": {
    puntos: [
      "Elaboración de Planes de Salud Ocupacional ante el Consejo de Salud Ocupacional.",
      "Conformación y capacitación de brigadas de emergencia.",
      "Gestión de Permisos Sanitarios de Funcionamiento ante el Ministerio de Salud.",
      "Auditorías de cumplimiento de condiciones físico-sanitarias."
    ],
    tiempo: "15 a 30 días hábiles.",
    requisito: "Informe de inspección previa y planos del local."
  },
  "Regencia Ambiental": {
    puntos: [
      "Supervisión técnica en sitio para verificar cumplimiento ambiental.",
      "Elaboración de bitácoras de regencia ambiental oficiales.",
      "Presentación de informes de cumplimiento ante SETENA u otras entidades.",
      "Asesoría continua para prevenir multas y cierres operativos."
    ],
    tiempo: "Mensual / Semestral (según resolución).",
    requisito: "Resolución Administrativa de la viabilidad ambiental."
  }
};

const viabilidades = [
  {
    title: "SETENA & Viabilidad Ambiental",
    desc: "Gestión integral de formularios (D1, D2), Pronósticos de Plan de Gestión Ambiental y seguimiento de expedientes.",
    icon: <FileCheck className="text-bukue-primary" size={32} />,
    image: "/ViabilidadAmbiental.webp"
  },
  {
    title: "Gestión de Recurso Hídrico",
    desc: "Trámites ante el AyA y ASADAS, diseño de sistemas de tratamiento de aguas residuales y permisos de vertido.",
    icon: <Droplets className="text-bukue-primary" size={32} />,
    image: "/recursos-hidricos.jpg"
  },
  {
    title: "Salud & Seguridad Ocupacional",
    desc: "Planes de salud, brigadas de emergencia y cumplimiento normativo ante el Ministerio de Salud.",
    icon: <HardHat className="text-bukue-primary" size={32} />,
    image: "/SaludOcupacional.webp"
  },
  {
    title: "Regencia Ambiental",
    desc: "Supervisión técnica periódica para garantizar que su proyecto cumpla con los compromisos adquiridos.",
    icon: <ClipboardList className="text-bukue-primary" size={32} />,
    image: "/RegenciaAmbiental.jpg"
  }
];

export default function Viabilidades() {
  // 2. ESTADO PARA EL MODAL
  const [selectedService, setSelectedService] = useState<any>(null);
  const router = useRouter();

  return (
    <section className="relative py-24 bg-white overflow-hidden min-h-screen">
      {/* Decoración fondo */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <Image src="/PlantasLaterales_SinFondo.png" alt="Decor" width={400} height={800} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 mt-10">
          <h2 className="text-bukue-dark text-5xl font-black mb-6">
            Viabilidades <span className="text-bukue-primary">Estratégicas</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            No solo gestionamos documentos; aseguramos la continuidad operativa de su inversión mediante un riguroso cumplimiento técnico y legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {viabilidades.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-bukue-dark mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* BOTÓN QUE ABRE EL MODAL */}
                  <button 
                    onClick={() => setSelectedService(item)}
                    className="mt-6 flex items-center gap-2 text-bukue-primary font-bold group/btn self-start"
                  >
                    Saber más <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remate */}
        <div className="mt-20 p-10 bg-bukue-dark rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">¿Necesita una valoración técnica preliminar?</h3>
            <p className="text-gray-400">Analizamos su proyecto antes de iniciar cualquier trámite institucional.</p>
          </div>
          <button 
            className="bg-bukue-light text-bukue-dark px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform shrink-0"
            onClick={() => router.push('/contacto')}
          >
            Iniciar Consulta Gratuita
          </button>
        </div>
      </div>

      {/* 3. COMPONENTE MODAL INTEGRADO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-bukue-dark/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <div className="bg-bukue-accent p-8 pr-14 relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  title="Cerrar modal"
                  className="absolute top-6 right-6 p-2 hover:bg-white rounded-full transition-colors text-bukue-dark"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-black text-bukue-dark leading-tight">{selectedService.title}</h2>
                <p className="text-bukue-primary font-bold mt-2">Alcance Técnico</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid gap-4">
                  {infoDetallada[selectedService.title as keyof typeof infoDetallada]?.puntos.map((punto, i) => (
                    <div key={i} className="flex gap-3 items-start text-gray-600">
                      <CheckCircle2 className="text-bukue-primary shrink-0 mt-1" size={18} />
                      <span className="text-sm leading-relaxed">{punto}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-bukue-accent rounded-xl text-bukue-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-gray-400">Tiempo</p>
                      <p className="text-xs font-bold text-bukue-dark">
                        {infoDetallada[selectedService.title as keyof typeof infoDetallada]?.tiempo}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-bukue-accent rounded-xl text-bukue-primary">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-gray-400">Requisito</p>
                      <p className="text-xs font-bold text-bukue-dark">
                        {infoDetallada[selectedService.title as keyof typeof infoDetallada]?.requisito}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-bukue-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-bukue-primary transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}