"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, FileText } from 'lucide-react';

const infoDetallada: Record<string, { puntos: string[], tiempo: string, requisito: string }> = {
  "SETENA & Viabilidad Ambiental": {
    puntos: [
      "Elaboración de formularios D1 y D2 según categoría de impacto.",
      "Gestión de Pronósticos de Plan de Gestión Ambiental (P-PGA).",
      "Seguimiento técnico de expedientes ante SETENA.",
      "Asesoría en cumplimiento de medidas ambientales."
    ],
    tiempo: "Variable según categoría",
    requisito: "Plano catastrado y uso de suelo"
  },
  "Gestión de Recurso Hídrico": {
    puntos: [
      "Trámites de disponibilidad de agua ante AyA/ASADAS.",
      "Diseño de sistemas de tratamiento de aguas residuales.",
      "Permisos de vertido y reportes operacionales.",
      "Concesiones de aprovechamiento de agua superficial o subterránea."
    ],
    tiempo: "3 a 6 meses",
    requisito: "Estudio técnico de suelos"
  },
  "Salud & Seguridad Ocupacional": {
    puntos: [
      "Elaboración de Planes de Salud Ocupacional.",
      "Conformación y capacitación de Brigadas de Emergencia.",
      "Gestión de Permisos Sanitarios de Funcionamiento.",
      "Auditorías de cumplimiento normativo (Ley 6727)."
    ],
    tiempo: "1 a 2 meses",
    requisito: "Planos de planta física"
  },
  "Regencia Ambiental": {
    puntos: [
      "Visitas de inspección técnica periódica.",
      "Elaboración de informes de regencia para SETENA.",
      "Control de bitácora ambiental de obra.",
      "Verificación de cumplimiento de compromisos ambientales."
    ],
    tiempo: "Durante ejecución de proyecto",
    requisito: "Viabilidad Ambiental aprobada"
  }
};

interface ModalServicioProps {
  isOpen: boolean;
  onClose: () => void;
  data: { title: string } | null;
}

const ModalServicio = ({ isOpen, onClose, data }: ModalServicioProps) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-bukue-dark/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            {/* Cabecera */}
            <div className="bg-bukue-accent p-8 pr-14 relative">
              <button 
                onClick={onClose}
                title="Cerrar modal"
                className="absolute top-6 right-6 p-2 hover:bg-white rounded-full transition-colors text-bukue-dark"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-black text-bukue-dark">{data.title}</h2>
              <p className="text-bukue-primary font-bold mt-2">Detalles Técnicos y Alcance</p>
            </div>

            {/* Contenido */}
            <div className="p-8 space-y-8">
              <div className="grid gap-4">
                {infoDetallada[data.title]?.puntos.map((punto, i) => (
                  <div key={i} className="flex gap-3 items-start text-gray-600">
                    <CheckCircle2 className="text-bukue-primary shrink-0 mt-1" size={18} />
                    <span className="text-sm leading-relaxed">{punto}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-bukue-accent rounded-lg text-bukue-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Tiempo Estimado</p>
                    <p className="text-xs font-bold text-bukue-dark">{infoDetallada[data.title]?.tiempo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-bukue-accent rounded-lg text-bukue-primary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Requisito Clave</p>
                    <p className="text-xs font-bold text-bukue-dark">{infoDetallada[data.title]?.requisito}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-6 bg-gray-50 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-bukue-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-bukue-primary transition-all"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};