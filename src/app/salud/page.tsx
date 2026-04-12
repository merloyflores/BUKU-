"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Users, ClipboardCheck, Siren, ArrowRight, CheckCircle, FileText, Activity, HeartPulse } from 'lucide-react';

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
      {/* NUEVO HEADER INFORMATIVO (Sin imagen de fondo pesada) */}
      <header className="pt-40 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-bukue-primary font-bold tracking-widest uppercase text-xs mb-6"
            >
              <span className="w-8 h-0.5 bg-bukue-primary"></span>
              Gestión de Riesgo Humano
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-bukue-dark leading-tight tracking-tighter">
              Salud Ocupacional <br /> 
              <span className="text-bukue-primary italic">y Bienestar Laboral.</span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 font-light leading-relaxed">
              En Costa Rica, la seguridad laboral no es solo un requisito legal, es la base de la continuidad de su negocio. Ayudamos a empresas a cumplir con la normativa del <b className="text-bukue-dark">CSO</b> y el <b className="text-bukue-dark">Ministerio de Salud</b> con un enfoque humano.
            </p>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE DATOS / VALOR (Lo que faltaba de info) */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-bukue-accent rounded-full flex items-center justify-center text-bukue-primary">
                <FileText size={24} />
              </div>
              <h4 className="text-xl font-bold text-bukue-dark">Cumplimiento Legal</h4>
              <p className="text-gray-500 text-sm">Evite multas y cierres cumpliendo con la Ley 6727 y los reglamentos técnicos vigentes en el país.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-bukue-accent rounded-full flex items-center justify-center text-bukue-primary">
                <Activity size={24} />
              </div>
              <h4 className="text-xl font-bold text-bukue-dark">Continuidad Operativa</h4>
              <p className="text-gray-500 text-sm">Reduzca el ausentismo y los accidentes laborales mediante una identificación temprana de riesgos.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-bukue-accent rounded-full flex items-center justify-center text-bukue-primary">
                <HeartPulse size={24} />
              </div>
              <h4 className="text-xl font-bold text-bukue-dark">Cultura de Cuidado</h4>
              <p className="text-gray-500 text-sm">Mejore el clima organizacional demostrando un compromiso real con la salud física y mental de su equipo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EDITORIAL - ENFOQUE TÉCNICO E INFORMATIVO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl border-l-4 border-bukue-primary pl-8 md:pl-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-12 items-start"
            >
              {/* Columna de Título y Contexto */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-bukue-dark leading-tight mb-6">
                  El rol estratégico de la prevención en la industria moderna.
                </h2>
                <div className="h-1 w-20 bg-bukue-primary mb-6"></div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Análisis de Riesgo y Cumplimiento
                </p>
              </div>

              {/* Columnas de Texto Estilo Periódico */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed text-base">
                <div className="space-y-6">
                  <p>
                    La salud ocupacional en el contexto costarricense ha evolucionado de ser una simple obligación administrativa a convertirse en un pilar de la eficiencia operativa. No se trata únicamente de cumplir con las inspecciones del <b className="text-bukue-dark">Ministerio de Salud</b> o el <b className="text-bukue-dark">MTSS</b>, sino de entender cómo un entorno seguro impacta directamente en los costos de las primas de seguros y en la retención del talento humano.
                  </p>
                  <p>
                    En <b className="text-bukue-dark text-bukue-primary">BUKUË</b>, abordamos la gestión de riesgos mediante un diagnóstico exhaustivo de las condiciones físico-ambientales. Identificamos los peligros potenciales antes de que se conviertan en incidentes, permitiendo que la gerencia tome decisiones basadas en datos técnicos y no en suposiciones.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    Nuestra metodología editorial para la documentación de planes de salud asegura que cada protocolo sea ejecutable y comprensible para todos los niveles de la organización. Desde el manejo de sustancias químicas hasta la ergonomía en puestos de oficina, cada detalle cuenta para construir una infraestructura legal robusta.
                  </p>
                  <p>
                    Finalmente, la formación de brigadas y la preparación ante emergencias no son eventos aislados, sino procesos continuos de mejora. Al delegar esta gestión en expertos, su empresa garantiza no solo la aprobación de permisos de funcionamiento, sino también la tranquilidad de operar bajo un esquema de <span className="italic">protección integral 24/7.</span>
                  </p>
                </div>
              </div>
            </motion.div>

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
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-10 group"
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
          <div className="bg-bukue-dark rounded-2xl p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
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
            <div className="lg:w-1/2 relative h-100 w-full rounded-2xl overflow-hidden">
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