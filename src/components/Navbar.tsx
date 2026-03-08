"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Viabilidades Ambientales', href: '/ViabilidadesAmbientales' },
    { name: 'Salud Ocupacional', href: '/salud-ocupacional' },
    { name: 'Certificaciones', href: '/certificaciones' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center group transition-transform hover:scale-105">
          <div className="relative w-32 h-12 md:w-40 md:h-14">
            <Image 
              src="/LOGO_BUKUE_sin fondo.png" 
              alt="BUKUË Consultoría Ambiental" 
              fill
              className="object-contain"
              priority 
            />
          </div>
        </Link>

        {/* Contenedor de Acciones (Botón Contacto + Hamburguesa) */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          {/* Botón CTA: Ahora visible desde 'flex' (móvil) y ajustado en tamaño */}
          <Link 
            href="/contacto" 
            className={`hidden sm:flex px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all shadow-md ${
              pathname === '/contacto'
                ? 'bg-bukue-dark text-white' 
                : 'bg-bukue-primary text-white hover:bg-bukue-dark hover:shadow-bukue-primary/20'
            }`}
          >
            Contáctenos
          </Link>

          {/* Botón Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-bukue-dark rounded-lg md:hidden hover:bg-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Desktop y Móvil */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 transition-all`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-2xl bg-white md:bg-transparent md:flex-row md:space-x-2 md:mt-0 md:border-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-bukue-primary text-white shadow-md' 
                        : 'text-bukue-dark hover:text-bukue-primary hover:bg-bukue-accent' 
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            {/* Link de contacto extra solo para la lista desplegable en móviles muy pequeños */}
            <li className="sm:hidden">
              <Link 
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-bukue-primary font-bold italic"
              >
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;