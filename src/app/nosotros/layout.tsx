import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nosotros | Equipo de Gestión Ambiental',
  description: 'Conozca al equipo de BUKUË y nuestra experiencia en gestión ambiental, cumplimiento normativo y sostenibilidad en Costa Rica.',
  alternates: { canonical: '/nosotros' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
