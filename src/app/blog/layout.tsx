import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Gestión Ambiental y Sostenibilidad',
  description:
    'Análisis técnicos, normativa, guías de SETENA, gestión hídrica, sostenibilidad, salud ocupacional e innovación ambiental en Costa Rica.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog de Gestión Ambiental y Sostenibilidad | BUKUË',
    description:
      'Información técnica para empresas y proyectos sobre normativa ambiental, SETENA y sostenibilidad en Costa Rica.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
