import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react';
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bukue-dark text-white pt-16 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid de columnas.
            Antes, en móvil solo se veía la Columna 1 (marca) porque las otras
            3 tenían "hidden md:block" — eso escondía por completo el teléfono,
            el correo y la dirección, que es justo la información que alguien
            busca en el footer desde el celular. Ahora "Contacto Directo" se
            muestra siempre, y "Empresa" + "Servicios" se agrupan en un
            acordeón colapsable solo en móvil: el footer sigue compacto por
            defecto, pero nada desaparece del todo. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-16 text-center md:text-left">

          {/* Columna 1: Branding (SIEMPRE VISIBLE) */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/LOGO_BUKUE_sin fondo.png"
              alt="Logo BUKUË"
              width={60}
              height={60}
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Consultoría ambiental estratégica en Costa Rica. Transformamos la responsabilidad ecológica en rentabilidad para su empresa.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/share/18C9U7tT12/"
                className="p-2 bg-white/5 rounded-full hover:bg-bukue-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/bukue_consultores"
                className="p-2 bg-white/5 rounded-full hover:bg-bukue-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://wa.me/50688017441"
                className="p-2 bg-white/5 rounded-full hover:bg-bukue-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp size={20} />
              </Link>
            </div>
          </div>

          {/* Columna: Contacto Directo — ahora SIEMPRE visible (también en
              móvil). Es información de negocio (teléfono/correo/ubicación)
              que un visitante espera encontrar sin tener que desplegar nada. */}
          <div className="order-2 md:order-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-bukue-light mb-5 md:hidden">
              Contacto Directo
            </h3>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3 hidden md:block">
              Contacto Directo
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-bukue-light shrink-0" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-bukue-light shrink-0" />
                <a href="tel:+50688017441" className="hover:text-white transition-colors">(506) 8801-7441</a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-bukue-light shrink-0" />
                <a href="mailto:admin@bukuecr.com" className="hover:text-white transition-colors break-all">admin@bukuecr.com</a>
              </li>
            </ul>
          </div>

          {/* Empresa + Servicios: acordeón colapsable SOLO en móvil, para
              mantener el footer chico por defecto sin borrar los enlaces. */}
          <div className="order-3 md:hidden">
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-sm font-bold text-bukue-light py-3 border-y border-white/10 [&::-webkit-details-marker]:hidden">
                Más enlaces
                <ChevronDown size={16} className="transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="grid grid-cols-2 gap-8 pt-8 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Empresa</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                    <li><Link href="/nosotros" className="hover:text-white">Sobre Nosotros</Link></li>
                    <li><Link href="#servicios" className="hover:text-white">Soluciones</Link></li>
                    <li><Link href="https://wa.me/50688017441" className="hover:text-white">Cita de Valoración</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Servicios</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li><Link href="/tramitologia-ambiental" className="hover:text-white">Tramitología Ambiental</Link></li>
                    <li><Link href="/gestion-residuos" className="hover:text-white">Gestión de Residuos</Link></li>
                    <li><Link href="/salud" className="hover:text-white">Salud Ocupacional</Link></li>
                    <li><Link href="/certificaciones" className="hover:text-white">Certificaciones ISO</Link></li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          {/* Columna 2: Empresa (versión normal, solo desktop) */}
          <div className="hidden md:block md:order-2">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3">
              Empresa
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white flex items-center gap-2">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white flex items-center gap-2">Sobre Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-white flex items-center gap-2">Soluciones</Link></li>
              <li><Link href="https://wa.me/50688017441" className="hover:text-white flex items-center gap-2 tracking-wide">Cita de Valoración</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios (versión normal, solo desktop) */}
          <div className="hidden md:block md:order-3">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3">
              Servicios
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/tramitologia-ambiental" className="hover:text-white cursor-pointer transition-colors">Tramitología Ambiental</Link></li>
              <li><Link href="/gestion-residuos" className="hover:text-white cursor-pointer transition-colors">Gestión de Residuos</Link></li>
              <li><Link href="/salud" className="hover:text-white cursor-pointer transition-colors">Salud Ocupacional</Link></li>
              <li><Link href="/certificaciones" className="hover:text-white cursor-pointer transition-colors">Certificaciones ISO</Link></li>
            </ul>
          </div>
        </div>

        {/* Parte inferior (SIEMPRE VISIBLE) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} BUKUË Consultorías Ambientales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Powered by</span>
            <a
              href="https://nexflow-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-white hover:text-bukue-light transition-colors group"
            >
              Nexflow Digital
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;