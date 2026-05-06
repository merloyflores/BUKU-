"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Tramites en Setena', href: '/ViabilidadesAmbientales' },
    { name: 'Salud Ocupacional', href: '/salud' },
    { name: 'Certificaciones', href: '/certificaciones' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* CAPA BLUR (OVERLAY) - Ajustado a 1330px */}
      <div 
        className={`fixed inset-0 z-40 bg-bukue-dark/10 backdrop-blur-md transition-all duration-500 min-[1330px]:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav className="fixed w-full z-50 top-0 border-b border-white/10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl flex items-center justify-between mx-auto p-4 relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105 z-50">
            <div className="relative w-32 h-12 md:w-60 md:h-18">
              <Image 
                src="/LOGO_BUKUE_sin fondo.png" 
                alt="BUKUË Consultoría Ambiental" 
                fill
                className="object-contain"
                priority 
              />
            </div>
          </Link>

          {/* Acciones - Ajustado a 1330px */}
          <div className="flex min-[1330px]:order-2 items-center space-x-4 z-50">
            <Link 
              href="/contacto" 
              className={`hidden sm:flex px-6 py-2.5 rounded-full font-bold text-sm lg:text-base transition-all shadow-md ${
                pathname === '/contacto'
                  ? 'bg-bukue-dark text-white' 
                  : 'bg-bukue-primary text-white hover:bg-bukue-dark hover:shadow-bukue-primary/20'
              }`}
            >
              Contáctenos
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-bukue-dark rounded-xl min-[1330px]:hidden hover:bg-bukue-accent/50 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MENÚ EVOLUCIONADO - Ajustado a 1330px */}
          <div className={`
            absolute top-0 left-0 w-full h-screen bg-white/95 min-[1330px]:bg-transparent
            flex flex-col min-[1330px]:flex-row min-[1330px]:h-auto min-[1330px]:relative
            min-[1330px]:w-auto min-[1330px]:order-1
            transition-all duration-500 ease-in-out transform
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full min-[1330px]:translate-y-0 opacity-0 min-[1330px]:opacity-100 invisible min-[1330px]:visible'}
          `}>
            <ul className="flex flex-col min-[1330px]:flex-row items-center justify-center min-[1330px]:justify-start h-full space-y-8 min-[1330px]:space-y-0 min-[1330px]:space-x-2 p-8 min-[1330px]:p-0 font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="w-full min-[1330px]:w-auto text-center">
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl min-[1330px]:text-base block py-3 px-6 rounded-2xl transition-all duration-300 whitespace-nowrap ${
                        isActive 
                          ? 'text-bukue-primary min-[1330px]:bg-bukue-primary min-[1330px]:text-white' 
                          : 'text-bukue-dark hover:text-bukue-primary min-[1330px]:hover:bg-bukue-accent' 
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              
              <li className="w-full sm:hidden pt-6 border-t border-gray-100">
                <Link 
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block py-4 px-8 bg-bukue-primary text-white text-xl font-bold rounded-2xl text-center shadow-xl shadow-bukue-primary/30"
                >
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;