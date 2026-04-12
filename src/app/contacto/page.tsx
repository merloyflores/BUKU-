"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef, useState } from 'react';
import { sendEmail } from '../../action';

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      formRef.current?.reset();
    } else {
      alert("Lo sentimos, hubo un error al enviar el mensaje. Intente de nuevo.");
    }
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-bukue-dark mb-4"
            >
              Hablemos de su <span className="text-bukue-primary">Futuro Sostenible</span>
            </motion.h1>
            <p className="text-gray-600 text-lg">Estamos listos para asesorarle en sus proyectos ambientales y de salud ocupacional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Info de Contacto */}
            <div className="space-y-8 ">
              <div className="bg-bukue-accent p-6 rounded-2xl border border-bukue-primary/10 shadow-xl">
                <h3 className="text-xl font-bold text-bukue-dark mb-6">Información Directa</h3>
                <div className="space-y-6 break-all">
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-bukue-primary">
                      <Phone size={20} />
                    </div>
                    <span>(506) 8801-7441</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-bukue-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    
                    {/* Ajustamos el tamaño del texto y forzamos el quiebre si no cabe */}
                    <span className="text-sm md:text-base break-all md:break-normal truncate hover:text-clip">
                      admin@bukuecr.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-bukue-primary">
                      <MapPin size={20} />
                    </div>
                    <span>San José, Costa Rica</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/50688017441" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200"
              >
                <IoLogoWhatsapp className='text-24px'/>
                WhatsApp Directo
              </a>
            </div>

            {/* Formulario */}
            <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-50">
              <form 
                ref={formRef}
                action={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bukue-dark ml-1">Nombre Completo</label>
                    <input 
                      name="nombre"
                      type="text" 
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bukue-primary/20 focus:border-bukue-primary transition-all" 
                      placeholder="Ej: Juan Pérez" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bukue-dark ml-1">Correo Electrónico</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bukue-primary/20 focus:border-bukue-primary transition-all" 
                      placeholder="juan@empresa.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-bold text-bukue-dark ml-1">Asunto / Servicio</label>
                  <select 
                    name="asunto"
                    id="asunto" 
                    title="Seleccione el servicio de interés" 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bukue-primary/20 focus:border-bukue-primary transition-all"
                  >
                    <option value="Tramitología Ambiental">Tramitología Ambiental</option>
                    <option value="Salud Ocupacional">Salud Ocupacional</option>
                    <option value="Certificaciones ISO / Carbono Neutral">Certificaciones ISO / Carbono Neutral</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-bukue-dark ml-1">Mensaje</label>
                  <textarea 
                    name="mensaje"
                    required
                    rows={4} 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-bukue-primary/20 focus:border-bukue-primary transition-all" 
                    placeholder="Cuéntenos sobre su proyecto..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full md:w-auto bg-bukue-dark hover:bg-bukue-primary text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Enviar Mensaje <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}