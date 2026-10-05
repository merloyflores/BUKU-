import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Viabilidad Ambiental y Trámites SETENA',
  description: 'Asesoría técnica para viabilidad ambiental, formularios y trámites ante SETENA en Costa Rica.',
  alternates: { canonical: '/ViabilidadesAmbientales' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
