"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Settings, ShieldAlert, Leaf, CheckCircle2, ArrowUpRight, ShieldCheck, ChevronDown, Zap, Globe2, TrendingUp, ClipboardCheck, Settings2, ArrowRight, Mail, Phone, Search, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { sendEmail } from '../../../action';

const pilares = [
  {
    id: "iso",
    icon: <Settings size={32} />,
    title: "Sistemas de Gestión ISO",
    subtitle: "Calidad y Eficiencia",
    desc: "Acompañamiento integral para la implementación y auditoría de normas internacionales que optimizan su operación.",
    items: ["ISO 9001: Gestión de Calidad", "ISO 14001: Gestión Ambiental", "ISO 45001: Salud y Seguridad"],
    color: "from-emerald-500/20 to-transparent"
  },
  {
    id: "tst",
    icon: <ShieldAlert size={32} />,
    title: "Salud y Seguridad (TST)",
    subtitle: "Cumplimiento Legal",
    desc: "Garantizamos entornos laborales seguros cumpliendo con toda la normativa del Ministerio de Salud y el MTSS.",
    items: ["Planes de Emergencia", "Conformación de Brigadas", "Auditorías de Riesgos"],
    color: "from-emerald-500/20 to-transparent"
  },
  {
    id: "sostenibilidad",
    icon: <Leaf size={32} />,
    title: "Sellos de Sostenibilidad",
    subtitle: "Diferenciación Verde",
    desc: "Posicionamos su marca mediante galardones que certifican su compromiso real con el medio ambiente.",
    items: ["Bandera Azul Ecológica", "Carbono Neutralidad", "Certificación CST"],
    color: "from-emerald-500/20 to-transparent"
  }
];

const beneficios = [
  {
    title: "Confianza del Cliente",
    desc: "Obtener certificaciones impulsa la seguridad del mercado en sus procesos. Generamos credibilidad ante sus socios comerciales y clientes finales mediante estándares verificables.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "Eficiencia Operativa",
    desc: "La consultoría especializada permite identificar y mitigar riesgos, reduciendo desperdicios y optimizando costos relacionados con ausencias o multas.",
    icon: <Zap size={40} />,
  },
  {
    title: "Oportunidades de Negocio",
    desc: "Le posicionamos como una empresa competitiva para acceder a licitaciones públicas y mercados internacionales que exigen certificaciones de calidad y sostenibilidad.",
    icon: <Globe2 size={40} />,
  }
];

const metodologiaPro = [
  {
    number: "01",
    title: "Análisis de Brechas",
    tag: "Fase de Diagnóstico",
    desc: "Realizamos una auditoría diagnóstica para identificar las discrepancias entre su operación actual y los requisitos de la norma (ISO/TST).",
    details: ["Auditoría de sitio", "Mapeo de procesos", "Informe de hallazgos"],
    icon: <Search size={28} />,
    color: "from-blue-600 to-blue-400"
  },
  {
    number: "02",
    title: "Arquitectura del Sistema",
    tag: "Fase de Diseño",
    desc: "Diseñamos la documentación y los controles operativos necesarios, asegurando que el sistema se adapte a su empresa y no al revés.",
    details: ["Manuales de gestión", "Capacitación técnica", "KPIs de control"],
    icon: <Settings2 size={28} />,
    color: "from-bukue-primary to-green-400"
  },
  {
    number: "03",
    title: "Validación y Cierre",
    tag: "Fase de Certificación",
    desc: "Acompañamos la auditoría externa y cerramos cualquier hallazgo para garantizar la entrega de su certificación oficial.",
    details: ["Pre-auditoría", "Acompañamiento legal", "Sello de cumplimiento"],
    icon: <ShieldCheck size={28} />,
    color: "from-bukue-dark to-gray-700"
  }
];

export default function HeroCertificaciones() {
  const formRef = useRef<HTMLFormElement>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(formData: FormData) {
      setIsPending(true);
      const result = await sendEmail(formData);
      setIsPending(false);

      if (result.success) {
        alert("¡Mensaje enviado con éxito!");
        formRef.current?.reset();
      } else {
        alert("Hubo un error al enviar.");
      }
  }

  return (
    <main>
    {/* 1. Hero Section: "De la Norma a la Excelencia" */}
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-bukue-dark">
      {/* 1. Imagen de Fondo con Overlay de Marca */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HojasFondo4.jpg"
          alt="Excelencia y Cumplimiento"
          fill
          className="object-cover opacity-30" // Opacidad baja para que el texto destaque
          priority />
        {/* Degradado para fundir la imagen con el color corporativo */}
        <div className="absolute inset-0 bg-linear-to-b from-bukue-dark/80 via-bukue-dark/95 to-bukue-dark" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge de confianza */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 bg-bukue-primary/20 border border-bukue-primary/30 w-fit px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck size={18} className="text-bukue-primary" />
            <span className="text-bukue-primary font-bold tracking-widest uppercase text-xs">
              Asesoría de Alto Nivel
            </span>
          </motion.div>

          {/* Título Principal con Énfasis */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
          >
            Elevamos sus <br />
            <span className="text-bukue-primary">Estándares.</span>
          </motion.h1>

          {/* Subtítulo enfocado en TST e ISO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-2xl mb-12 font-medium"
          >
            Consultoría especializada en sistemas <span className="text-white font-bold">ISO</span>,
            gestión integral de <span className="text-white font-bold">TST</span> y sellos de sostenibilidad
            que transforman su cumplimiento legal en competitividad real.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#nuestros-pilares"
              className="bg-bukue-primary hover:bg-white text-white hover:text-bukue-dark px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-bukue-primary/20 text-center"
            >
              Explorar Soluciones
            </a>
            <a
              href="#contacto"
              className="border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm text-center"
            >
              Agendar Diagnóstico
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
    
    {/* 2. El Tridente de Consultoría (El Núcleo) */}
    <section id="nuestros-pilares" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">

          {/* Título de la Sección */}
          <div className="mb-20">
            <h2 className="text-bukue-dark text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Especialización que genera <br />
              <span className="text-bukue-primary text-3xl md:text-4xl">Valor Corporativo</span>
            </h2>
            <div className="w-24 h-2 bg-bukue-primary rounded-full" />
          </div>

          {/* Grid de Pilares */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pilares.map((pilar, idx) => (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-bukue-primary/10 transition-all duration-500 flex flex-col h-full"
              >
                {/* Efecto de fondo sutil al hacer hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${pilar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />

                <div className="relative z-10">
                  {/* Icono */}
                  <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-bukue-primary mb-8 group-hover:scale-110 group-hover:bg-bukue-primary group-hover:text-white transition-all duration-500">
                    {pilar.icon}
                  </div>

                  {/* Textos */}
                  <span className="text-bukue-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                    {pilar.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-bukue-dark mb-4 group-hover:text-bukue-primary transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {pilar.desc}
                  </p>

                  {/* Lista de Checkmarks */}
                  <ul className="space-y-4">
                    {pilar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <div className="bg-bukue-primary/10 p-1 rounded-full text-bukue-primary">
                          <CheckCircle2 size={14} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón sutil de "Saber más" */}
                <div className="mt-auto pt-10 relative z-10">
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-bukue-dark group-hover:gap-4 transition-all">
                    Detalles del servicio <ArrowUpRight size={16} className="text-bukue-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sección "Por qué certificar su empresa con Bukuë" */}
      <section className="py-24 bg-bukue-accent/30 relative overflow-hidden">
        {/* Elemento decorativo de fondo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-150 h-150 bg-bukue-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Lado Izquierdo: Texto y Título */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-bukue-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                  Valor Estratégico
                </span>
                <h2 className="text-bukue-dark text-4xl md:text-5xl font-black mb-8 leading-tight">
                  ¿Por qué certificar su <br /> 
                  <span className="text-bukue-primary">empresa con Bukuë?</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  No se trata solo de cumplir con la normativa vigente. Es una decisión 
                  de negocio que garantiza la continuidad de su operación y mejora 
                  sustancialmente su imagen pública.
                </p>
                
                {/* Pequeño KPI o dato de impacto */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-bukue-primary/10 flex items-center gap-4 w-fit">
                  <div className="bg-bukue-primary/10 p-3 rounded-xl text-bukue-primary">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-bukue-dark font-bold text-xl">+10 años</p>
                    <p className="text-gray-500 text-sm font-medium">Respaldando el éxito empresarial.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Lado Derecho: Grid de Beneficios */}
            <div className="lg:w-1/2 grid sm:grid-cols-1 gap-6">
              {beneficios.map((beneficio, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-bukue-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {beneficio.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bukue-dark mb-3 group-hover:text-bukue-primary transition-colors">
                        {beneficio.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {beneficio.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* 4. Metodología de Acompañamiento (El "Cómo lo hacemos") */}
      <section className="py-32 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-6">
          
          {/* Cabecera con Badge y Título */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
              <Zap size={14} className="text-bukue-primary" />
              <span className="text-bukue-dark font-bold uppercase tracking-widest text-[10px]">
                Método Bukuë 360°
              </span>
            </div>
            <h2 className="text-bukue-dark text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
              Su ruta crítica hacia la <br />
              <span className="text-bukue-primary italic">Excelencia Normativa</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Eliminamos la incertidumbre del proceso mediante un acompañamiento 
              técnico-legal que garantiza resultados medibles y sostenibles.
            </p>
          </div>

          {/* Grid Metodológico */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            
            {/* Línea de Progreso (Fondo) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-dashed border-t border-gray-200 z-0" />

            {metodologiaPro.map((fase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                {/* Card Principal */}
                <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative z-10 overflow-hidden">
                  
                  {/* Background Decor (Blob de color) */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${fase.color} opacity-5 group-hover:opacity-10 rounded-full transition-opacity duration-500`} />

                  {/* Header de la Card */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${fase.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                      {fase.icon}
                    </div>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-bukue-primary/10 transition-colors">
                      {fase.number}
                    </span>
                  </div>

                  {/* Contenido */}
                  <span className="text-bukue-primary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    {fase.tag}
                  </span>
                  <h3 className="text-2xl font-black text-bukue-dark mb-4">
                    {fase.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {fase.desc}
                  </p>

                  {/* Mini Lista de Detalles */}
                  <div className="mt-auto space-y-3">
                    {fase.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-bukue-dark/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-bukue-primary" />
                        {detail}
                      </div>
                    ))}
                  </div>

                </div>

                {/* Indicador de flecha entre cards (Desktop) */}
                {idx !== metodologiaPro.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 z-20 bg-white p-2 rounded-full border border-gray-100 shadow-md text-bukue-primary">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
      {/* 5. Cierre: CTA Especializado */}
      <section id="contacto" className="py-24 bg-bukue-dark relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-bukue-primary/10 rounded-full blur-3xl" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-bukue-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[4rem] p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Texto de Invitación */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  ¿Listo para elevar sus 
                  <span className="text-bukue-primary"> estándares?</span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Solicite un diagnóstico preliminar de cumplimiento. Nuestro equipo de expertos 
                  le ayudará a identificar la ruta más eficiente hacia su certificación.
                </p>

                {/* Canales directos */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-bukue-primary rounded-2xl flex items-center justify-center shadow-lg shadow-bukue-primary/20">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Escríbanos</p>
                      <p className="text-lg font-medium">info@bukuecr.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Llámenos</p>
                      <p className="text-lg font-medium">+(506) 8801-7441</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Caja de Acción Rápida */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 shadow-2xl"
              >
                <h3 className="text-2xl font-black text-bukue-dark mb-2">Inicie hoy mismo</h3>
                <p className="text-gray-500 mb-8 text-sm">Déjenos sus datos y un consultor especializado se pondrá en contacto en menos de 24 horas.</p>
                
                <form 
                  ref={formRef} 
                  action={handleSubmit} 
                  className="space-y-4"
                >
                  <input 
                    name="nombre" // IMPORTANTE: name para FormData
                    type="text" 
                    required
                    placeholder="Nombre completo" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-bukue-primary focus:outline-none transition-colors"
                  />
                  <input 
                    name="email" // IMPORTANTE
                    type="email" 
                    required
                    placeholder="Correo corporativo" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-bukue-primary focus:outline-none transition-colors"
                  />
                  <select 
                    name="interes" // IMPORTANTE
                    title="Seleccione su área de interés"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-bukue-primary focus:outline-none transition-colors text-gray-400"
                  >
                    <option value="Sistemas ISO">Interés: Sistemas ISO</option>
                    <option value="Salud Ocupacional">Interés: Salud Ocupacional (TST)</option>
                    <option value="Sostenibilidad">Interés: Sostenibilidad / Bandera Azul</option>
                  </select>
                  
                  <button 
                    disabled={isPending}
                    className="w-full bg-bukue-primary hover:bg-bukue-dark text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 group shadow-xl shadow-bukue-primary/20 disabled:opacity-50"
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        Solicitar Diagnóstico Gratuito
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-center mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                  Sin compromisos · Respuesta inmediata
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>     
    </main>

  );
}