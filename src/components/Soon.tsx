"use client";
import { motion } from 'framer-motion';
import { Construction, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface SoonProps {
  title: string;
}

export default function Soon({ title }: SoonProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-bukue-accent/50 border border-bukue-primary/10 p-12 rounded-[3rem] text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Construction size={60} className="text-bukue-primary" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 text-bukue-light"
            >
              <Loader2 size={24} />
            </motion.div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-bukue-dark mb-4">
          {title}
        </h1>
        
        <p className="text-gray-600 text-lg mb-10">
          Estamos preparando contenido detallado y técnico para ofrecerle la mejor asesoría ambiental. 
          Vuelva pronto para conocer más sobre nuestras soluciones.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-bukue-dark text-white px-8 py-3 rounded-full font-bold hover:bg-bukue-primary transition-all"
          >
            <ArrowLeft size={18} /> Volver al Inicio
          </Link>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-2 border-2 border-bukue-primary text-bukue-primary px-8 py-3 rounded-full font-bold hover:bg-bukue-primary hover:text-white transition-all"
          >
            Consultar Ahora
          </Link>
        </div>
      </motion.div>
    </div>
  );
}