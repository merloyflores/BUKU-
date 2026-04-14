"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    subtitle: string;
    desc: string;
    items: string[];
    content?: string; // El texto estilo periódico
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bukue-dark/90 backdrop-blur-md"
          />

          {/* Contenedor del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl"
          >
            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              title="Cerrar modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-bukue-primary hover:text-white transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Lateral Izquierdo - Resumen Quick View */}
              <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-12 border-r border-gray-100">
                <span className="text-bukue-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl font-black text-bukue-dark leading-tight mb-6">
                  {service.title}
                </h2>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-gray-700">
                      <CheckCircle2 size={16} className="text-bukue-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contenido Principal - Estilo Editorial */}
              <div className="w-full md:w-2/3 p-8 md:p-12 bg-white">
                <article className="prose prose-slate max-w-none">
                  {/* Letra Capital (Drop Cap) */}
                  <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                    {service.content}
                </p>
                </article>

                {/* CTA Final */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-bukue-dark font-bold">¿Dudas sobre este servicio?</p>
                    <p className="text-sm text-gray-500">Agende una sesión de consultoría técnica.</p>
                  </div>
                  <Link
                    href="/contacto"
                    onClick={onClose}
                    className="bg-bukue-dark hover:bg-bukue-primary text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
                  >
                    Contactar <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}