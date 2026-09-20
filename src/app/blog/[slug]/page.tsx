"use client";
import { useParams } from 'next/navigation';
import { blogPosts, ContentBlock } from '@/data/posts';
import { getYouTubeEmbedId } from '@/lib/video';
import Image from 'next/image';
import { ArrowLeft, Clock, Tag, Share2, Calendar, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Renderiza cada bloque del contenido REAL del post (antes esta sección
// era texto fijo idéntico para los 7 artículos, sin importar el tema).
function ContentBlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'heading':
      return (
        <h3 key={index} className="text-3xl font-black text-bukue-dark mt-12 mb-6">
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index} className="mb-8">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-4 mb-12">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3">
              <CheckCircle2 className="text-bukue-primary shrink-0 mt-1" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote
          key={index}
          className="border-l-4 border-bukue-primary pl-6 italic text-xl text-bukue-dark my-10"
        >
          {block.text}
          {block.author && (
            <footer className="text-sm text-gray-400 not-italic mt-2">— {block.author}</footer>
          )}
        </blockquote>
      );
    case 'callout':
      return (
        <div
          key={index}
          className="bg-bukue-accent/40 border border-bukue-primary/20 rounded-2xl p-6 my-10"
        >
          <p className="font-black text-bukue-dark mb-2">{block.title}</p>
          <p className="text-gray-600 text-base">{block.text}</p>
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Post no encontrado</h2>
          <Link href="/blog" className="text-bukue-primary font-bold">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const youtubeId = getYouTubeEmbedId(post.videoUrl);

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* HEADER DEL POST */}
      <header className="relative h-[60vh] md:h-[70vh] w-full bg-emerald-200 overflow-hidden">
        <Image
          src={post.image || '/placeholder-blog.webp'}
          alt={post.title}
          fill
          className="object-cover opacity-50 transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-bukue-primary font-bold mb-8 hover:-translate-x-2 transition-transform bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
              >
                <ArrowLeft size={18} /> Volver al Blog
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-bukue-primary text-white px-4 py-1 rounded-xl text-xs font-black uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-bukue-dark font-bold text-sm flex items-center gap-2">
                  <Calendar size={16} /> {post.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-bukue-dark max-w-5xl leading-[0.9] tracking-tighter">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16 mt-16">
        {/* COLUMNA IZQUIERDA: CONTENIDO PRINCIPAL */}
        <div className="lg:col-span-2 space-y-12">
          <p className="text-2xl md:text-3xl text-gray-600 leading-tight font-medium border-l-8 border-bukue-primary pl-8 py-2">
            {post.excerpt}
          </p>

          {/* VIDEO — solo se renderiza si hay un ID de YouTube válido */}
          {youtubeId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-12 border-gray-50"
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

          {/* CUERPO DEL ARTÍCULO — contenido real por post, tomado de post.content */}
          <div className="prose prose-xl max-w-none text-gray-700">
            {post.content.map((block, i) => (
              <ContentBlockRenderer key={i} block={block} index={i} />
            ))}

            {/* GALERÍA DE IMÁGENES */}
            {post.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                {post.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="relative h-72 rounded-4xl overflow-hidden shadow-lg border-4 border-white"
                  >
                    <Image src={img} alt={`${post.title} — imagen ${i + 1}`} fill className="object-cover" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* TAGS */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* BARRA LATERAL: INFO Y ACCIONES */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-sm">
              <h4 className="font-black text-xl mb-8 border-b border-gray-200 pb-4 italic">
                Información Técnica
              </h4>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-bukue-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">
                      Tiempo de lectura
                    </p>
                    <p className="font-bold text-bukue-dark">{post.readTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-bukue-primary">
                    <Tag size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">
                      Especialidad
                    </p>
                    <p className="font-bold text-bukue-dark">{post.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-bukue-primary">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">
                      Autor
                    </p>
                    <p className="font-bold text-bukue-dark">{post.author}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={compartir}
                className="w-full mt-12 bg-bukue-dark text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-bukue-primary transition-all shadow-xl hover:shadow-bukue-primary/20"
              >
                {copiado ? (
                  <>
                    <Check size={20} /> Enlace copiado
                  </>
                ) : (
                  <>
                    <Share2 size={20} /> Compartir Análisis
                  </>
                )}
              </button>
            </div>

            {/* CTA Final en el Sidebar — ahora enlaza de verdad a contacto */}
            <div className="p-8 bg-bukue-primary rounded-[3rem] text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-black text-xl mb-4 text-bukue-dark">¿Necesita asesoría en este tema?</h4>
                <p className="text-sm opacity-90 mb-6">
                  Contáctenos para profundizar en los requisitos técnicos de su proyecto.
                </p>
                <Link
                  href={`/contacto?tema=${post.slug}`}
                  className="block text-center bg-white text-bukue-dark px-6 py-3 rounded-xl font-bold text-sm w-full hover:bg-bukue-dark hover:text-white transition-colors"
                >
                  Agendar consulta técnica
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* SECCIÓN DE ARTÍCULOS RELACIONADOS */}
      <section className="bg-gray-50 py-24 border-t border-gray-100 mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-bukue-primary font-black uppercase text-xs tracking-[0.3em] mb-4 block">
                Seguir Explorando
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-bukue-dark tracking-tighter">
                Análisis <span className="text-bukue-primary">Relacionados</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-bukue-dark font-bold border-b-2 border-bukue-primary pb-1 hover:text-bukue-primary transition-colors"
            >
              Ver todo el blog
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.category === post.category && p.id !== post.id)
              .slice(0, 3)
              .map((relPost) => (
                <motion.div
                  key={relPost.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={relPost.image || '/placeholder-blog.webp'}
                      alt={relPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-black uppercase text-bukue-primary tracking-widest mb-3 block">
                      {relPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-bukue-dark mb-4 leading-tight group-hover:text-bukue-primary transition-colors">
                      {relPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="flex items-center gap-2 text-sm font-black text-bukue-dark mt-4"
                    >
                      Leer más <ArrowRight size={16} className="text-bukue-primary" />
                    </Link>
                  </div>
                </motion.div>
              ))}

            {blogPosts.filter((p) => p.category === post.category && p.id !== post.id).length === 0 && (
              <p className="text-gray-400 col-span-3">
                Aún no hay más artículos publicados en esta categoría.
              </p>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}