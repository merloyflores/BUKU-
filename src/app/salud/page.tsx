"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  ClipboardCheck,
  Siren,
  ArrowRight,
  CheckCircle,
  FileText,
  Activity,
  HeartPulse,
  Scale,
} from 'lucide-react';

// Cada servicio enlaza a /contacto con el servicio precargado, en vez de
// un botón "Más información" decorativo que no llevaba a ningún lado.
const serviciosSalud = [
  {
    title: "Planes de Salud Ocupacional",
    desc: "Elaboración y registro de planes oficiales ante el Consejo de Salud Ocupacional (CSO), conforme al Reglamento General de Seguridad e Higiene en el Trabajo.",
    icon: <ShieldCheck size={32} />,
    image: "/Planes-Salud-Ocupacional.jpg",
    slug: "planes-salud-ocupacional"
  },
  {
    title: "Comisiones de Salud Ocupacional",
    desc: "Constitución, capacitación y registro de la Comisión de Salud Ocupacional, obligatoria por Ley para toda empresa con 10 o más trabajadores.",
    icon: <Users size={32} />,
    image: "/Comision-Salud-Ocupacional.jpg",
    slug: "comisiones-salud-ocupacional"
  },
  {
    title: "Brigadas de Emergencia",
    desc: "Capacitación técnica y formación de brigadas contra incendios, primeros auxilios y evacuación, alineadas con los protocolos de la Comisión Nacional de Emergencias.",
    icon: <Siren size={32} />,
    image: "/Brigadas-Emergencia-CR.jpg",
    slug: "brigadas-emergencia"
  },
  {
    title: "Permisos Sanitarios de Funcionamiento",
    desc: "Gestión completa ante el Ministerio de Salud para la obtención y renovación del Permiso Sanitario, conforme al Decreto Ejecutivo N° 39472-S.",
    icon: <ClipboardCheck size={32} />,
    image: "/requisitos-para-obtener-permisos.webp",
    slug: "permisos-sanitarios"
  }
];

const marcoLegal = [
  {
    norma: "Ley N° 6727",
    nombre: "Ley de Riesgos del Trabajo",
    detalle: "Reforma al Título IV del Código de Trabajo. Establece la obligatoriedad de la póliza de Riesgos del Trabajo ante el INS y de la Comisión de Salud Ocupacional en empresas con 10 o más trabajadores."
  },
  {
    norma: "Ley N° 5395",
    nombre: "Ley General de Salud",
    detalle: "Marco general de las condiciones sanitarias exigibles a toda actividad, obra o proyecto en el territorio nacional."
  },
  {
    norma: "Decreto N° 39472-S",
    nombre: "Reglamento de Permisos Sanitarios de Funcionamiento",
    detalle: "Regula el trámite, requisitos y renovación del Permiso Sanitario de Funcionamiento ante el Ministerio de Salud."
  }
];

export default function SaludOcupacionalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER INFORMATIVO — antes pt-40 (160px) era fijo para cualquier
          pantalla; en móvil eso dejaba un bloque de blanco enorme entre el
          nav y el título. Ahora el padding se reduce en pantallas chicas y
          crece de vuelta en desktop. */}
      <header className="pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-16 bg-linear-to-b from-gray-50 to-white">
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
              En Costa Rica, la seguridad laboral no es solo un requisito legal, es la base de la continuidad de su negocio. Ayudamos a empresas a cumplir con la normativa del <b className="text-bukue-dark">Consejo de Salud Ocupacional (CSO)</b>, el <b className="text-bukue-dark">Ministerio de Salud</b> y el <b className="text-bukue-dark">INS</b>, con un enfoque humano.
            </p>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE DATOS / VALOR */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-bukue-accent rounded-full flex items-center justify-center text-bukue-primary">
                <FileText size={24} />
              </div>
              <h4 className="text-xl font-bold text-bukue-dark">Cumplimiento Legal</h4>
              <p className="text-gray-500 text-sm">Evite multas y cierres cumpliendo con la Ley 6727 de Riesgos del Trabajo y el Reglamento General de Seguridad e Higiene en el Trabajo.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-bukue-accent rounded-full flex items-center justify-center text-bukue-primary">
                <Activity size={24} />
              </div>
              <h4 className="text-xl font-bold text-bukue-dark">Continuidad Operativa</h4>
              <p className="text-gray-500 text-sm">Reduzca el ausentismo y los accidentes laborales mediante una identificación temprana de riesgos y una Comisión de Salud Ocupacional activa.</p>
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

      {/* SECCIÓN EDITORIAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl border-l-4 border-bukue-primary pl-8 md:pl-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-12 items-start"
            >
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-bukue-dark leading-tight mb-6">
                  El rol estratégico de la prevención en la industria moderna.
                </h2>
                <div className="h-1 w-20 bg-bukue-primary mb-6"></div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Análisis de Riesgo y Cumplimiento
                </p>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed text-base">
                <div className="space-y-6">
                  <p>
                    La salud ocupacional en el contexto costarricense ha evolucionado de ser una simple obligación administrativa a convertirse en un pilar de la eficiencia operativa. No se trata únicamente de cumplir con las inspecciones del <b className="text-bukue-dark">Ministerio de Salud</b>, sino de entender cómo un entorno seguro impacta directamente en la siniestralidad reportada ante el <b className="text-bukue-dark">INS</b> y en la retención del talento humano.
                  </p>
                  <p>
                    En <b className="text-bukue-primary">BUKUË</b>, abordamos la gestión de riesgos mediante un diagnóstico exhaustivo de las condiciones físico-ambientales. Identificamos los peligros potenciales antes de que se conviertan en incidentes, permitiendo que la gerencia tome decisiones basadas en datos técnicos y no en suposiciones.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    Nuestra metodología para la documentación de planes de salud ocupacional asegura que cada protocolo sea ejecutable y comprensible para todos los niveles de la organización. Desde el manejo de sustancias químicas hasta la ergonomía en puestos de oficina, cada detalle cuenta para construir una infraestructura legal robusta.
                  </p>
                  <p>
                    Si su empresa cuenta con 10 o más trabajadores, la Ley 6727 exige constituir una Comisión de Salud Ocupacional. La formación de brigadas y la preparación ante emergencias no son eventos aislados, sino procesos continuos que garantizan tanto la aprobación de permisos de funcionamiento como la <span className="italic">protección integral de su operación.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GRID DE SERVICIOS — cada card enlaza a contacto con el servicio precargado */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bukue-primary">
              Servicios
            </span>
            <h2 className="text-bukue-dark text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Cobertura integral en salud ocupacional
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {serviciosSalud.map((servicio, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-10 group"
              >
                <div className="mb-8 p-4 bg-bukue-accent rounded-2xl w-fit text-bukue-primary group-hover:bg-bukue-primary group-hover:text-white transition-colors duration-500">
                  {servicio.icon}
                </div>
                <h3 className="text-2xl font-bold text-bukue-dark mb-4">{servicio.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{servicio.desc}</p>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-8">
                  <Image src={servicio.image} alt={servicio.title} fill className="object-cover" />
                </div>
                <Link
                  href={`/contacto?servicio=${servicio.slug}`}
                  className="flex items-center gap-2 font-black text-bukue-dark group/btn"
                >
                  Más información <ArrowRight size={18} className="text-bukue-primary transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCO LEGAL — le da peso real a la página sin relleno */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bukue-primary">
              Marco Legal
            </span>
            <h2 className="text-bukue-dark text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Normativa que rige nuestra gestión
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {marcoLegal.map((norma, i) => (
              <div key={i} className="bg-white p-7 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-bukue-primary">
                  <Scale size={18} />
                  <span className="text-xs font-black uppercase tracking-wide">{norma.norma}</span>
                </div>
                <h4 className="font-bold text-bukue-dark text-base leading-snug">{norma.nombre}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{norma.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist de Cumplimiento */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-bukue-dark rounded-2xl p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Cumplimiento ante el <span className="text-bukue-primary">Ministerio de Salud, el CSO y el INS.</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Inspecciones Físico-Sanitarias",
                  "Comisión de Salud Ocupacional (Ley 6727)",
                  "Gestión de Residuos Bioinfecciosos",
                  "Protocolos de Emergencia"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-bukue-primary" size={20} />
                    <span className="font-bold text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 mt-10 bg-bukue-primary text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-white hover:text-bukue-dark transition-colors"
              >
                Solicitar Diagnóstico Inicial <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-100 w-full rounded-2xl overflow-hidden">
              <Image
                src="/Seguridad.jpg"
                alt="Seguridad ocupacional en Costa Rica"
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