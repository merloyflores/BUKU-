"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, ArrowRight, Video } from 'lucide-react';
import { blogPosts } from '@/data/posts'; // <--- IMPORTANTE: Conecta tus datos

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      
      {/* Hiedra Lateral Izquierda - Tu asset personalizado */}
      <div className="absolute top-0 left-0 h-full w-70 opacity-40 pointer-events-none z-0">
        <Image 
          src="/Ramalateral.png" 
          alt="Decoración BUKUË" 
          fill 
          className="object-contain object-top-left"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ENCABEZADO EXPLICATIVO */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="bg-bukue-accent text-bukue-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em] border border-bukue-primary/10">
              Centro de Divulgación Técnica
            </span>
            
            <h1 className="text-6xl md:text-8xl font-black text-bukue-dark tracking-tighter leading-[0.9]">
              Nuestra <span className="text-bukue-primary">Perspectiva.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                En un entorno donde la legislación ambiental evoluciona constantemente, la información precisa es la herramienta más valiosa para cualquier proyecto.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed border-l-2 border-gray-100 pl-6">
                Compartimos análisis profundos, guías de cumplimiento y las últimas innovaciones tecnológicas aplicadas a la sostenibilidad en Costa Rica.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid de Artículos Reales */}
        <div className="grid lg:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80">
                <Image 
                  src={post.image || '/placeholder-blog.webp'} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105 duration-700"
                />
                {post.videoUrl && (
                  <div className="absolute top-6 right-6 bg-bukue-primary p-3 rounded-full text-white shadow-xl animate-pulse">
                    <Video size={20} />
                  </div>
                )}
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-bukue-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 font-bold uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-bukue-dark mb-4 group-hover:text-bukue-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Link dinámico al post individual */}
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-3 font-black text-bukue-dark group/btn"
                >
                  <span className="border-b-2 border-bukue-primary pb-1">Leer artículo completo</span>
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2 text-bukue-primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}