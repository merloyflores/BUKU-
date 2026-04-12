import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bukue-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
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

          {/* Columna 2: Empresa (OCULTO EN MÓVIL) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3">
              Empresa
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white flex items-center gap-2">Inicio</Link></li>
              <li><Link href="#nosotros" className="hover:text-white flex items-center gap-2">Sobre Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-white flex items-center gap-2">Soluciones</Link></li>
              <li><Link href="https://wa.me/50688017441" className="hover:text-white flex items-center gap-2 tracking-wide">Cita de Valoración</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios (OCULTO EN MÓVIL) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3">
              Servicios
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Tramitología Ambiental</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gestión de Residuos</li>
              <li className="hover:text-white cursor-pointer transition-colors">Salud Ocupacional</li>
              <li className="hover:text-white cursor-pointer transition-colors">Certificaciones ISO</li>
            </ul>
          </div>

          {/* Columna 4: Contacto (OCULTO EN MÓVIL) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-bukue-light pl-3">
              Contacto Directo
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-bukue-light shrink-0" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-bukue-light shrink-0" />
                <span>(506) 8801-7441</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-bukue-light shrink-0" />
                <span>admin@bukuecr.com</span>
              </li>
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