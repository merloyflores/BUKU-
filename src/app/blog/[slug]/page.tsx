"use client";

import { useParams } from 'next/navigation';
import { blogPosts, ContentBlock } from '@/data/posts';
import { getYouTubeEmbedId } from '@/lib/video';
import Image from 'next/image';
import {
  ArrowLeft,
  Clock,
  Tag,
  Share2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Check,
  FileText,
  UserRound,
  Bookmark,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function ContentBlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'heading': {
      const headingId = slugify(block.text);
      return (
        <h3 id={headingId} key={index} className="scroll-mt-32 text-3xl font-black text-bukue-dark mt-12 mb-6 tracking-[-0.02em]">
          {block.text}
        </h3>
      );
    }
    case 'paragraph':
      return (
        <p key={index} className="mb-7 text-[1.04rem] leading-8 text-gray-700">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-4 mb-12">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 rounded-2xl border border-gray-100 bg-[#f8fbf8] px-4 py-4">
              <CheckCircle2 className="text-bukue-primary shrink-0 mt-1" size={20} />
              <span className="text-gray-700 leading-7">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-10 rounded-[1.75rem] border border-bukue-primary/15 bg-bukue-accent/40 p-8 text-xl italic leading-9 text-bukue-dark"
        >
          <p>{block.text}</p>
          {block.author && (
            <footer className="text-sm text-gray-500 not-italic mt-4 font-semibold">— {block.author}</footer>
          )}
        </blockquote>
      );
    case 'callout':
      return (
        <div
          key={index}
          className="my-10 rounded-[1.75rem] border border-bukue-primary/20 bg-[#f5fbf5] p-7"
        >
          <p className="font-black text-bukue-dark mb-2 text-lg">{block.title}</p>
          <p className="text-gray-600 leading-7">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostDetail() {
  const { slug } = useParams();
  const [copiado, setCopiado] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  const tableOfContents = useMemo(() => {
    if (!post) return [];
    return post.content
      .filter((block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading')
      .map((block) => ({ text: block.text, id: slugify(block.text) }));
  }, [post]);

  async function compartir() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
        return;
      } catch {
        // el usuario canceló el share nativo, seguimos al fallback
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // clipboard no disponible; no hacemos nada más
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7faf7] px-6">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-4xl font-black mb-4 text-bukue-dark">Artículo no encontrado</h2>
          <p className="text-gray-500 mb-6">La publicación solicitada no está disponible o fue movida.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl bg-bukue-dark px-5 py-3 text-sm font-bold text-white">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const youtubeId = getYouTubeEmbedId(post.videoUrl);
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#f7faf7] pb-20">
      <header className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] w-full bg-bukue-dark">
          <Image
            src={post.image || '/placeholder-blog.webp'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,46,22,0.92)_0%,rgba(5,46,22,0.74)_42%,rgba(5,46,22,0.25)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7faf7] to-transparent" />

          <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-14 md:pb-18">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl"
            >
              <Link
                href="/blog"
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-transform hover:-translate-x-1"
              >
                <ArrowLeft size={16} /> Volver al Blog
              </Link>

              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-bukue-primary px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-white">
                  {post.category}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                  {post.date}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-[-0.05em] max-w-4xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg md:text-xl leading-8 text-white/82">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  <Clock size={16} className="text-bukue-light" /> {post.readTime}
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  <UserRound size={16} className="text-bukue-light" /> {post.author}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 -mt-14 relative z-20">
        <div className="grid xl:grid-cols-[minmax(0,1.25fr)_340px] gap-10 items-start">
          <div className="rounded-[2rem] border border-[#dce9dd] bg-white p-7 md:p-10 lg:p-12 shadow-[0_20px_55px_rgba(5,46,22,0.06)]">
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-[#f7faf7] px-3 py-1.5 text-xs font-bold text-gray-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="rounded-[1.75rem] border border-bukue-primary/15 bg-[#f5fbf5] p-6 md:p-8 mb-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-bukue-primary mb-3">
                Resumen ejecutivo
              </p>
              <p className="text-lg md:text-xl leading-8 text-gray-700">
                {post.excerpt}
              </p>
            </div>

            {youtubeId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-10 aspect-video overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_18px_40px_rgba(5,46,22,0.08)]"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            )}

            <div className="max-w-none">
              {post.content.map((block, i) => (
                <ContentBlockRenderer key={i} block={block} index={i} />
              ))}

              {post.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                  {post.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      className="relative h-72 overflow-hidden rounded-[1.75rem] border border-gray-100 shadow-sm"
                    >
                      <Image src={img} alt={`${post.title} — imagen ${i + 1}`} fill className="object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="xl:sticky xl:top-28 space-y-6">
            <div className="rounded-[2rem] border border-[#dce9dd] bg-white p-7 shadow-[0_16px_40px_rgba(5,46,22,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bukue-accent text-bukue-primary">
                  <Bookmark size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-primary">
                    Ficha técnica
                  </p>
                  <h4 className="text-xl font-black text-bukue-dark">Detalles del artículo</h4>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Clock, label: 'Tiempo de lectura', value: post.readTime },
                  { icon: Tag, label: 'Especialidad', value: post.category },
                  { icon: Calendar, label: 'Fecha de publicación', value: post.date },
                  { icon: UserRound, label: 'Autor', value: post.author },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 rounded-2xl border border-gray-100 bg-[#f8fbf8] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-bukue-primary shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.18em] mb-1">
                        {item.label}
                      </p>
                      <p className="font-bold text-bukue-dark leading-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {post.documentUrl && (
                <a
                  href={post.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-bukue-primary/20 bg-white px-5 py-4 font-black text-bukue-dark transition-all hover:border-bukue-primary hover:text-bukue-primary"
                >
                  <FileText size={18} /> Ver PDF oficial
                </a>
              )}

              <button
                onClick={compartir}
                className={`${post.documentUrl ? 'mt-4' : 'mt-6'} flex w-full items-center justify-center gap-3 rounded-2xl bg-bukue-dark px-5 py-4 font-black text-white shadow-lg transition-colors hover:bg-bukue-primary`}
              >
                {copiado ? (
                  <>
                    <Check size={18} /> Enlace copiado
                  </>
                ) : (
                  <>
                    <Share2 size={18} /> Compartir análisis
                  </>
                )}
              </button>
            </div>

            {tableOfContents.length > 0 && (
              <div className="rounded-[2rem] border border-[#dce9dd] bg-white p-7 shadow-[0_16px_40px_rgba(5,46,22,0.05)]">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-primary mb-3">
                  Navegación rápida
                </p>
                <h4 className="text-xl font-black text-bukue-dark mb-5">Secciones del contenido</h4>
                <div className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-bukue-primary/30 hover:text-bukue-dark"
                    >
                      <span className="mt-0.5 text-xs font-black text-bukue-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium leading-6">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-[2rem] bg-bukue-dark p-7 text-white shadow-[0_18px_50px_rgba(5,46,22,0.16)]">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-light mb-3">
                Acompañamiento profesional
              </p>
              <h4 className="text-2xl font-black leading-tight mb-3">¿Necesita asesoría sobre este tema?</h4>
              <p className="text-sm leading-7 text-white/80 mb-6">
                Podemos apoyarle a convertir estos criterios técnicos en una ruta concreta de cumplimiento para su organización o proyecto.
              </p>
              <Link
                href={`/contacto?tema=${post.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-bukue-dark transition-colors hover:bg-bukue-light"
              >
                Agendar consulta técnica
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <section className="mt-20 border-t border-[#e1e9e2] bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-bukue-primary mb-3">
                Seguir explorando
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-bukue-dark tracking-[-0.04em]">
                Artículos relacionados
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-black text-bukue-dark border-b border-bukue-primary pb-1 hover:text-bukue-primary transition-colors"
            >
              Ver todo el blog <ArrowRight size={16} className="text-bukue-primary" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <motion.article
                key={relPost.id}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[1.75rem] border border-[#dde7de] bg-[#fdfefd] shadow-[0_12px_30px_rgba(5,46,22,0.05)] group"
              >
                <div className="relative h-52">
                  <Image
                    src={relPost.image || '/placeholder-blog.webp'}
                    alt={relPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="mb-3 inline-flex rounded-full bg-bukue-accent px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-bukue-primary">
                    {relPost.category}
                  </span>
                  <h3 className="text-xl font-black text-bukue-dark leading-tight mb-3 group-hover:text-bukue-primary transition-colors">
                    {relPost.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-500 mb-5 line-clamp-3">{relPost.excerpt}</p>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-black text-bukue-dark"
                  >
                    Leer más <ArrowRight size={16} className="text-bukue-primary" />
                  </Link>
                </div>
              </motion.article>
            ))}

            {relatedPosts.length === 0 && (
              <p className="col-span-3 rounded-[1.5rem] border border-dashed border-gray-300 bg-[#f8fbf8] px-6 py-12 text-center text-gray-400">
                Aún no hay más artículos publicados en esta categoría.
              </p>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
