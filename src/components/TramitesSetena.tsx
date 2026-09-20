"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  FileCheck,
  FileText,
  ClipboardCheck,
  ClipboardList,
  ArrowRight,
  X,
  CheckCircle2,
  Clock,
  FileSearch,
  Download,
} from 'lucide-react';

// 1. DATA DETALLADA PARA LOS MODALES
// Fuente: Guías oficiales SETENA (ST-LRA-Guía-08, 09 y 02) y Decreto n° 43898 / 42837-MINAE.
const infoDetallada = {
  "Formulario D1": {
    puntos: [
      "Aplica a AOP con área ≥ 1000 m², movimiento de tierra ≥ 1000 m³, ubicación fuera de cuadrante urbano, o Significancia de Impacto Ambiental (SIA) ≥ 330.",
      "La Plataforma Digital de SETENA determina cuál instrumento le corresponde a su proyecto: D1+DJCA, D1+P-PGA o D1+EsIA.",
      "Incluye datos generales del proyecto, representante legal, consultor ambiental inscrito y firma digital vigente.",
      "Requiere información geoespacial (shapefiles georreferenciados en CRTM05) y las matrices de Significancia de Impacto Ambiental."
    ],
    tiempo: "Varía según el instrumento aplicable (DJCA, P-PGA o EsIA).",
    requisito: "Plano catastrado, consultor ambiental vigente y firma digital.",
    pdf: "/documentos/guias-setena/ST-LRA-Guia-08-Requisitos-D1.pdf",
    pdfLabel: "Descargar Guía D1 (DJCA, P-PGA, EsIA)"
  },
  "Formulario D1-C": {
    puntos: [
      "Diseñado para AOP de categoría C ubicadas en un área ambientalmente frágil (Artículo 98, Decreto Ejecutivo N° 43898).",
      "Tarifa única de $67.8 (IVA incluido), que cubre el formulario y la Guía de Buenas Prácticas Ambientales.",
      "Incluye datos generales, representante legal y consultor ambiental registrado ante SETENA.",
      "Contempla cuestionarios sobre consumo de recursos ambientales relevantes e impactos y riesgos potenciales."
    ],
    tiempo: "Trámite ágil, un único formulario ante la Plataforma Digital.",
    requisito: "Ubicación del proyecto en área ambientalmente frágil y consultor ambiental vigente.",
    pdf: "/documentos/guias-setena/ST-LRA-Guia-09-Requisitos-D1-C.pdf",
    pdfLabel: "Descargar Guía D1-C"
  },
  "Estudio Diagnóstico Ambiental (EDA)": {
    puntos: [
      "Trámite voluntario para regularizar la situación ambiental de proyectos existentes.",
      "Aplica a proyectos iniciados antes del 17 de enero de 1997, o entre el 12 de febrero y el 24 de junio de 2004.",
      "También aplica de forma voluntaria o como resultado de un proceso sancionatorio administrativo o judicial.",
      "Incluye Lista de Verificación de Normativa Ambiental (LIVENA), Plan de Cumplimiento Ambiental y registro fotográfico georreferenciado."
    ],
    tiempo: "Depende de los hallazgos y el Plan de Cumplimiento Ambiental.",
    requisito: "Documento probatorio de la fecha de inicio del proyecto o de la condición que motiva el trámite.",
    pdf: "/documentos/guias-setena/ST-LRA-Guia-02-Requisitos-EDA.pdf",
    pdfLabel: "Descargar Guía EDA"
  },
  "Regencias Ambientales": {
    puntos: [
      "Supervisión técnica en sitio para verificar el cumplimiento de los compromisos ambientales adquiridos.",
      "Elaboración de bitácoras de regencia ambiental oficiales.",
      "Presentación de informes de cumplimiento ante SETENA u otras entidades.",
      "Asesoría continua para prevenir multas y cierres operativos."
    ],
    tiempo: "Mensual / Semestral, según la resolución administrativa.",
    requisito: "Resolución Administrativa de la viabilidad ambiental vigente.",
    pdf: null,
    pdfLabel: null
  }
};

const tramites = [
  {
    title: "Formulario D1",
    subtitle: "DJCA · P-PGA · EsIA",
    desc: "Evaluación de Impacto Ambiental para Actividades, Obras y Proyectos (AOP), mediante el instrumento que corresponda según la significancia ambiental de su proyecto.",
    icon: <FileCheck className="text-bukue-primary" size={32} />,
    image: "/FormularioD1.webp"
  },
  {
    title: "Formulario D1-C",
    subtitle: "Categoría C en áreas frágiles",
    desc: "Viabilidad ambiental para AOP de categoría C ubicadas en un área ambientalmente frágil, con un formulario simplificado ante SETENA.",
    icon: <FileText className="text-bukue-primary" size={32} />,
    image: "/FormularioD1C.webp"
  },
  {
    title: "Estudio Diagnóstico Ambiental (EDA)",
    subtitle: "Trámite voluntario",
    desc: "Regularización ambiental para proyectos ya existentes que iniciaron operaciones antes de la normativa vigente, o que voluntariamente desean formalizar su situación.",
    icon: <FileSearch className="text-bukue-primary" size={32} />,
    image: "/EstudioEDA.webp"
  },
  {
    title: "Regencias Ambientales",
    subtitle: "Supervisión técnica continua",
    desc: "Supervisión técnica periódica para garantizar que su proyecto cumpla con los compromisos ambientales adquiridos.",
    icon: <ClipboardList className="text-bukue-primary" size={32} />,
    image: "/RegenciaAmbiental.jpg"
  }
];

export default function TramitesSetena() {
  // 2. ESTADO PARA EL MODAL
  const [selectedTramite, setSelectedTramite] = useState<any>(null);
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
            Trámites ante <span className="text-bukue-primary">SETENA</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            No solo gestionamos documentos; aseguramos la continuidad operativa de su inversión mediante un riguroso cumplimiento técnico y legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tramites.map((item, index) => {
            const pdf = infoDetallada[item.title as keyof typeof infoDetallada]?.pdf;
            return (
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
                      <h3 className="text-2xl font-bold text-bukue-dark mb-1 leading-tight">{item.title}</h3>
                      <p className="text-bukue-primary text-xs font-black uppercase tracking-wide mb-3">{item.subtitle}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* ACCIONES: Saber más + Descarga (visible sin abrir el modal) */}
                    <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
                      <button
                        onClick={() => setSelectedTramite(item)}
                        className="flex items-center gap-2 text-bukue-primary font-bold group/btn"
                      >
                        Saber más <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                      </button>

                      {pdf && (
                        <a
                          href={pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs font-bold text-bukue-dark bg-bukue-accent px-3 py-2 rounded-lg hover:bg-bukue-primary hover:text-white transition-colors"
                        >
                          <Download size={14} /> Guía PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Remate */}
        <div className="mt-20 p-10 bg-bukue-dark rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">¿Necesita una valoración técnica preliminar?</h3>
            <p className="text-gray-400">
              Somos profesionales inscritos ante SETENA y con la experiencia para llevar su proyecto hacia el éxito.
            </p>
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
        {selectedTramite && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-bukue-dark/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <div className="bg-bukue-accent p-8 pr-14 relative shrink-0">
                <button
                  onClick={() => setSelectedTramite(null)}
                  title="Cerrar modal"
                  className="absolute top-6 right-6 p-2 hover:bg-white rounded-full transition-colors text-bukue-dark"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-black text-bukue-dark leading-tight">{selectedTramite.title}</h2>
                <p className="text-bukue-primary font-bold mt-2">{selectedTramite.subtitle}</p>

                {/* Botón de descarga también arriba en el modal, junto al título */}
                {infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.pdf && (
                  <a
                    href={infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.pdf as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-4 inline-flex items-center gap-2 bg-bukue-dark text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-bukue-primary transition-colors"
                  >
                    <Download size={16} />
                    {infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.pdfLabel}
                  </a>
                )}
              </div>

              <div className="p-8 space-y-6 overflow-y-auto">
                <div className="grid gap-4">
                  {infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.puntos.map((punto, i) => (
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
                        {infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.tiempo}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-bukue-accent rounded-xl text-bukue-primary">
                      <ClipboardCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-gray-400">Requisito clave</p>
                      <p className="text-xs font-bold text-bukue-dark">
                        {infoDetallada[selectedTramite.title as keyof typeof infoDetallada]?.requisito}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedTramite(null)}
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