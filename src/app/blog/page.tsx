"use client";

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Video, BookOpenText, ShieldCheck } from 'lucide-react';
import { blogPosts, categorias } from '@/data/posts';
import { isYouTubeUrl } from '@/lib/video';

export default function BlogPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todos');

  const posts = useMemo(() => {
    if (categoriaActiva === 'Todos') return blogPosts;
    return blogPosts.filter((p) => p.category === categoriaActiva);
  }, [categoriaActiva]);

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7faf7] pt-28 pb-20">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-[#eef7ef] via-white to-transparent" />
      <div className="absolute top-0 left-0 h-[32rem] w-80 opacity-20 pointer-events-none z-0">
        <Image
          src="/Ramalateral.png"
          alt="Decoración BUKUË"
          fill
          className="object-contain object-top-left"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-end mb-14"
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-[5.4rem] font-black text-bukue-dark tracking-[-0.05em] leading-[0.92]">
              Conocimiento ambiental para
              <span className="block text-bukue-primary">decisiones que generan valor.</span>
            </h1>

            <div className="mt-8 grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
              <p className="text-gray-600 md:pr-6">
                Explore análisis, normativa, sostenibilidad e innovación aplicados a los retos reales de empresas, proyectos y organizaciones.
              </p>
              <p className="text-gray-500 border-l border-gray-200 pl-6">
                Un espacio para aprender, comprender nuevas exigencias y descubrir soluciones que fortalecen la gestión ambiental y el crecimiento responsable.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#dce9dd] bg-white/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_rgba(5,46,22,0.08)]">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-primary mb-3">
                  Panorama editorial
                </p>
                <h2 className="text-2xl font-black text-bukue-dark leading-tight">
                  Contenido serio para una marca técnica.
                </h2>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-bukue-accent text-bukue-primary flex items-center justify-center">
                <BookOpenText size={24} />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: 'Artículos publicados',
                  value: String(blogPosts.length).padStart(2, '0'),
                },
                {
                  label: 'Áreas de especialidad',
                  value: String(categorias.length).padStart(2, '0'),
                },
                {
                  label: 'Enfoque editorial',
                  value: 'Técnico',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-[#f8fbf8] px-5 py-4"
                >
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-xl font-black text-bukue-dark">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-bukue-dark p-5 text-white">
              <div className="flex items-start gap-3">
                <ShieldCheck className="shrink-0 mt-0.5 text-bukue-light" size={20} />
                <p className="text-sm leading-relaxed text-white/85">
                  Un lenguaje profesional, visualmente más sobrio y una jerarquía de contenido pensada para transmitir autoridad.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="rounded-[2rem] border border-[#dce9dd] bg-white px-5 py-5 md:px-7 md:py-6 shadow-[0_16px_40px_rgba(5,46,22,0.05)] mb-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-primary mb-2">
                Filtrar publicaciones
              </p>
              <h3 className="text-2xl font-black text-bukue-dark">Explore por especialidad</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Todos', ...categorias].map((cat) => {
                const activo = cat === categoriaActiva;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoriaActiva(cat)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all border ${
                      activo
                        ? 'bg-bukue-dark border-bukue-dark text-white shadow-lg'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-bukue-primary/40 hover:text-bukue-dark'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          <motion.section
            key={categoriaActiva}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
            className="space-y-12"
          >
            {featuredPost ? (
              <article className="overflow-hidden rounded-[2.25rem] border border-[#dce9dd] bg-white shadow-[0_20px_60px_rgba(5,46,22,0.06)]">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[340px] lg:min-h-[430px]">
                    <Image
                      src={featuredPost.image || '/placeholder-blog.webp'}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031a0c]/65 via-[#031a0c]/25 to-transparent" />
                    <div className="absolute left-6 top-6 flex flex-wrap gap-3">
                      <span className="rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-bukue-dark">
                        Artículo destacado
                      </span>
                      <span className="rounded-full bg-bukue-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-white">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-[11px] font-black uppercase tracking-[0.22em] text-gray-400 mb-6">
                        <span>{featuredPost.date}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                        <span className="inline-flex items-center gap-2">
                          <Clock size={14} /> {featuredPost.readTime}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                        <span>{featuredPost.author}</span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-black text-bukue-dark tracking-[-0.03em] leading-tight mb-5">
                        {featuredPost.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed text-lg mb-7">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredPost.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f5f8f5] px-3 py-1.5 text-xs font-bold text-gray-500 border border-gray-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 max-w-md">
                        Una lectura prioritaria para quienes buscan criterio técnico con una presentación ejecutiva y fácil de compartir.
                      </p>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-bukue-dark px-6 py-4 text-sm font-black text-white hover:bg-bukue-primary transition-colors"
                      >
                        Leer artículo destacado
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}

            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
              {secondaryPosts.map((post) => (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-[2rem] border border-[#dde7de] bg-white shadow-[0_16px_40px_rgba(5,46,22,0.05)] transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image || '/placeholder-blog.webp'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    {isYouTubeUrl(post.videoUrl) && (
                      <div className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-bukue-primary shadow-lg">
                        <Video size={18} />
                      </div>
                    )}
                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-bukue-dark shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8 flex h-[calc(100%-16rem)] flex-col">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-bukue-dark leading-tight mb-4 group-hover:text-bukue-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500 mb-7 line-clamp-4 grow">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-black text-bukue-dark border-b border-bukue-primary w-fit pb-1 hover:text-bukue-primary transition-colors"
                    >
                      Ver análisis
                      <ArrowRight size={16} className="text-bukue-primary" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="rounded-[2rem] border border-dashed border-gray-300 bg-white py-20 text-center text-gray-400">
                Aún no hay artículos publicados en esta categoría.
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
