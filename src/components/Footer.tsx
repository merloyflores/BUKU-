import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-bukue-dark text-white">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              BUKUË<span className="text-bukue-light">CR</span>
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Consultoría ambiental estratégica para proyectos sostenibles y rentables.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Contacto</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4 flex items-center gap-2">
                  <Mail size={16} /> admin@bukuecr.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> (506) 8801-7441
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Síguenos</h2>
              <ul className="text-gray-400 font-medium flex gap-4">
                <li>
                  <a 
                    href="https://www.facebook.com/share/18C9U7tT12/" 
                    target="_blank" 
                    className="hover:text-bukue-light"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/bukue_consultores" 
                    target="_blank" 
                    className="hover:text-bukue-light"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2026 BUKUË Consultorías Ambientales. Desarrollado por Nexflow Digital.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;