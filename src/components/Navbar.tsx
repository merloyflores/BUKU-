"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Salud Ocupacional', href: '#salud' },
    { name: 'Certificaciones', href: '#certificaciones' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-black text-bukue-dark tracking-tighter">
            BUKUË<span className="text-bukue-light">.</span>
          </span>
        </Link>

        {/* Botón Hamburguesa (Solo Móvil) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-bukue-dark rounded-lg md:hidden hover:bg-gray-100"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú Desktop y Móvil */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 transition-all`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-2xl bg-white md:bg-transparent md:flex-row md:space-x-6 md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-bukue-dark hover:text-bukue-primary transition-colors border-b md:border-0 border-gray-50"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón CTA (Escondido en móviles pequeños) */}
        <div className="hidden lg:flex md:order-2">
          <Link 
            href="https://wa.me/50688017441" 
            className="text-white bg-bukue-primary hover:bg-bukue-dark px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-bukue-primary/20"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;