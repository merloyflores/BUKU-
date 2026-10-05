import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Salud Ocupacional',
  description: 'Servicios de salud y seguridad ocupacional para empresas en Costa Rica: prevención, planes, capacitación y cumplimiento.',
  alternates: { canonical: '/salud' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
