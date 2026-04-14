"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, Lightbulb, ArrowRight, BookOpen, Microscope } from 'lucide-react';
import { useState } from 'react';

export default function Nosotros() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="bg-white">
      {/* SECCIÓN 1 - HERO DE SECCIÓN */}
      <section className="relative min-h-[80vh] py-20 flex items-center bg-bukue-dark overflow-hidden">
        {/* Imagen de fondo con overlay degradado para mejor lectura */}
        <Image 
          src="/HojasFondo3.jpg" 
          alt="Bukuë Consultoría Ambiental" 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-bukue-dark via-bukue-dark/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-bukue-primary/20 text-bukue-light px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-6 border border-bukue-primary/30">
              Consultoría Ambiental Estratégica
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
              Su aliado para un
              crecimiento <span className="text-bukue-primary">consciente.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed font-medium">
              En BUKUË CR transformamos la responsabilidad ecológica en <span className="text-white font-bold">rentabilidad sostenible</span> para su empresa.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link 
                href="/#servicios"
                className="bg-bukue-primary hover:bg-bukue-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group"
              >
                Nuestros Servicios <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/20 backdrop-blur-sm text-white font-semibold">
                <div className="w-2 h-2 bg-bukue-light rounded-full animate-pulse" />
                +10 Años de Experiencia
              </div>
            </div>
          </motion.div>
        </div>

        {/* Elemento decorativo: Frase del PDF en la esquina inferior */}
        <div className="absolute bottom-10 right-10 hidden lg:block border-l-2 border-bukue-primary pl-6 max-w-xs">
          <p className="text-white/60 italic text-sm">
            "Procuremos siempre que nuestros actos dejen una huella verde en nuestro camino."
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 - NUESTRA ESENCIA / SOBRE NOSOTROS */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Contenedor de Imagen con estilo Premium */}
            <div className="relative h-150 rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="/IngenieroAmbiental.webp" 
                alt="Consultoría Ambiental Bukuë" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Badge Flotante: Usando el dato de los 10 años del catálogo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute -bottom-10 -right-6 bg-bukue-primary p-8 rounded-3xl text-white shadow-2xl z-20 text-center"
            >
              <span className="text-5xl font-black block tracking-tighter">10+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-90">Años de trayectoria<br/>profesional</span>
            </motion.div>

            {/* Elemento Decorativo */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-bukue-accent rounded-full -z-10 opacity-50" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-bukue-primary font-bold uppercase text-sm tracking-widest">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-5xl font-bold text-bukue-dark leading-tight">
                Equilibramos el éxito económico con la <span className="text-bukue-primary">protección ambiental.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              En <span className="font-bold">BUKUË CR</span>, somos una firma consultora en servicios ambientales comprometida con el éxito y la sostenibilidad de nuestros clientes. Nuestro enfoque principal es garantizar que cada proyecto que llevamos a cabo no solo cumpla con los másaltos estándares de protección ambiental, sino que también genere ingresos sostenibles para nuestros clientes.
            </p>

            {/* Los 3 Pilares del PDF (Rentabilidad, Sostenibilidad, Compromiso) */}
            <div className="grid gap-6">
              {[
                { 
                  icon: <Target className="text-white" />, 
                  title: "Resultados Rentables", 
                  desc: "Garantizamos que cada proyecto genere ingresos sostenibles mientras cumple con la normativa.",
                  color: "bg-bukue-primary"
                },
                { 
                  icon: <Users className="text-white" />, 
                  title: "Compromiso Integral", 
                  desc: "Trabajamos mano a mano con usted para minimizar el impacto ambiental y maximizar la rentabilidad.",
                  color: "bg-bukue-dark"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group">
                  <div className={`${item.color} w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-bukue-dark text-xl">{item.title}</h4>
                    <p className="text-gray-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-bukue-light pl-6 py-2 italic text-gray-500 font-medium">
              "Creemos firmemente que la sostenibilidad y la rentabilidad no son conceptos opuestos, sino complementarios."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - NUESTRO EQUIPO */}
      <section className="py-24 bg-linear-to-b from-white via-[#a6bdae] to-white relative overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-bukue-accent/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-bukue-primary font-bold uppercase text-sm tracking-[0.2em]"
            >
              Liderazgo Técnico
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-bukue-dark mt-4">
              El equipo detrás de su <span className="text-bukue-primary">cumplimiento ambiental.</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg">
              Contamos con profesionales altamente capacitados en Gestión Ambiental, dedicados a transformar retos normativos en oportunidades de crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {[
              {
                name: "Leonel Lépiz López",
                role: "Lic. Gestión Ambiental",
                image: "/LeonelPerfil3.png",
                specialty: "Estratega en Viabilidades",
                desc: "Especialista en la coordinación técnica de proyectos de alto impacto nacional."
              },
              {
                name: "Jossué Zeledón Cruz",
                role: "Ing. Gestión Ambiental",
                image: "/JossuePerfil2.png",
                specialty: "Especialista en Soluciones",
                desc: "Experto en la optimización de procesos y cumplimiento técnico institucional."
              },
              {
                name: "Danny Perfil", // Ajustar apellido si lo tienes
                role: "Consultor Ambiental",
                image: "/DannyPerfil2.png",
                specialty: "Gestión de Campo",
                desc: "Dedicado a la implementación efectiva de medidas de mitigación y seguimiento."
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                // DETALLE CLAVE: Manejo de clics para tablets
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative cursor-pointer"
              >
                {/* Contenedor Principal */}
                <div className={`relative h-137.5 w-full rounded-2xl overflow-hidden bg-bukue-dark shadow-2xl transition-all duration-500 
                  ${activeIndex === idx ? 'shadow-bukue-primary/20' : ''} group-hover:shadow-bukue-primary/20`}>
                  
                  {/* Imagen */}
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={`object-cover object-top transition-all duration-700 ease-in-out
                      ${activeIndex === idx ? 'grayscale-0 scale-110 opacity-100' : 'grayscale md:grayscale opacity-80 md:opacity-80'} 
                      group-hover:grayscale-0 md:group-hover:scale-110 group-hover:opacity-100`}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-bukue-dark via-transparent to-transparent opacity-90" />

                  {/* Tarjeta de Información */}
                  <div className="absolute bottom-4 left-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transition-transform duration-500">
                    
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] bg-bukue-primary/30 px-3 py-1 rounded-full border border-bukue-primary/20">
                          {member.role}
                        </span>
                        <h4 className="text-2xl font-bold text-white mt-3">
                          {member.name}
                        </h4>
                      </div>
                      {/* Icono que gira */}
                      <div className={`bg-bukue-primary p-2 rounded-full text-white transition-transform duration-700 
                        ${activeIndex === idx ? 'rotate-360' : ''} group-hover:rotate-360`}>
                        <Target size={16} />
                      </div>
                    </div>

                    <p className="text-bukue-light/90 font-medium text-xs mb-3 italic">
                      {member.specialty}
                    </p>

                    {/* Descripción expandible */}
                    <div className={`transition-all duration-500 overflow-hidden 
                      ${activeIndex === idx ? 'h-20 opacity-100' : 'h-0 opacity-0'} 
                      group-hover:h-20 group-hover:opacity-100`}>
                      <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-3">
                        {member.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 4: EDUCACIÓN AMBIENTAL & CTA AL BLOG */}
      <section className="py-24 bg-bukue-dark relative overflow-hidden">
        {/* Decoración: Hojas sutiles de fondo para mantener la temática */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/HojasFondo3.jpg" 
            alt="Textura ambiental" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[4rem] p-8 md:p-16 border border-white/10 flex flex-col lg:flex-row items-center gap-16">
            
            {/* Imagen representativa de Educación */}
            <div className="lg:w-1/2 relative h-112.5 w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/EducacionAmbiental.jpg" 
                alt="Talleres de Educación Ambiental" 
                fill 
                className="object-cover"
              />
              {/* Overlay informativo extraído del PDF */}
              <div className="absolute bottom-6 left-6 right-6 bg-bukue-primary/20 backdrop-blur-sm p-6 rounded-2xl text-white font-bold">
                <p className="text-sm font-medium leading-relaxed">
                  "La educación ambiental fortalece la responsabilidad social y reduce riesgos operativos."
                </p>
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-bukue-light font-bold uppercase text-sm tracking-widest">
                  <Lightbulb className="animate-pulse" size={18} /> Conocimiento que Transforma
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Nuestra misión va más allá de la <span className="text-bukue-primary">asesoría.</span>
                </h2>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                En <span className="font-bold">BUKUË CR</span>, creemos firmemente que la sostenibilidad y la rentabilidad no son conceptos opuestos, sino complementarios. Nuestra misión es ser su aliado estratégico, ayudándole a construir un futuro en el que su empresa crezca y prospere, al mismo tiempo que contribuye positivamente al bienestar del planeta.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-bukue-primary rounded-full" />
                  <span className="text-sm">Charlas de sensibilización</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-bukue-primary rounded-full" />
                  <span className="text-sm">Gestión de Cambio Climático</span>
                </div>
              </div>
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-bukue-dark px-10 py-5 rounded-full font-black flex items-center gap-3 shadow-2xl hover:bg-bukue-primary hover:text-white transition-all duration-300"
                >
                  <BookOpen size={20} className="group-hover:rotate-12 transition-transform" /> 
                  Explorar nuestro Blog 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}