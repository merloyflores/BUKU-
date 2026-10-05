import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Certificaciones y Sostenibilidad',
  description: 'Acompañamiento técnico de BUKUË en certificaciones, gestión sostenible y mejora del desempeño ambiental empresarial.',
  alternates: { canonical: '/certificaciones' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
