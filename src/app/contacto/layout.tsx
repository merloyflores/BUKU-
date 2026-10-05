import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacte a BUKUË para asesoría ambiental, trámites ante SETENA, salud ocupacional y certificaciones en Costa Rica.',
  alternates: { canonical: '/contacto' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
