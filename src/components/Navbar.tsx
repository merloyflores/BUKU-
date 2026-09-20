"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const serviceSubLinks = [
    { name: 'Trámites en Setena', href: '/ViabilidadesAmbientales', desc: 'Viabilidad y Regencia Ambiental ante SETENA' },
    { name: 'Salud Ocupacional', href: '/salud', desc: 'Programas de salud y seguridad laboral' },
    { name: 'Certificaciones', href: '/certificaciones', desc: 'Acompañamiento en normas y certificaciones' },
  ];

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
  ];

  const isServiceActive = serviceSubLinks.some((sub) => pathname === sub.href);

  const linkClasses = (active: boolean) => `
    relative py-2 text-base min-[1330px]:text-lg font-medium tracking-normal transition-colors
    ${active ? 'text-[#1F3328]' : 'text-[#4A4A42] hover:text-[#1F3328]'}
    after:content-[''] after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px]
    after:bg-[#3D6B4C] after:transition-all after:duration-300 after:-translate-x-1/2
    ${active ? 'after:w-6' : 'after:w-0 hover:after:w-6'}
  `;

  return (
    <>
      {/* Overlay para móvil */}
      <div
        className={`fixed inset-0 z-40 bg-[#1F3328]/40 backdrop-blur-sm transition-opacity duration-300 min-[1330px]:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#EDEBE2] shadow-[0_1px_0_rgba(31,51,40,0.04)]'
            : 'bg-[#FAF9F5]/60 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl grid grid-cols-[auto_1fr_auto] items-center mx-auto px-5 md:px-8 py-3.5">

          {/* LOGO */}
          <Link href="/" className="flex items-center z-50">
            <div className="relative w-28 h-10 min-[1330px]:w-52 min-[1330px]:h-16">
              <Image
                src="/LOGO_BUKUE_sin fondo.png"
                alt="BUKUË Consultoría Ambiental"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ENLACES DESKTOP — CENTRADOS */}
          <div className="hidden min-[1330px]:flex items-center justify-center space-x-12">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(pathname === link.href)}>
                {link.name}
              </Link>
            ))}

            {/* SERVICIOS */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${linkClasses(isServiceActive)}`}>
                Servicios
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 w-80">
                <div className="bg-white rounded-2xl border border-[#EDEBE2] shadow-xl shadow-[#1F3328]/6 overflow-hidden">
                  <div className="px-5 pt-4 pb-2">
                    <span className="font-serif italic text-lg text-[#1F3328]">Servicios</span>
                  </div>
                  <div className="pb-2">
                    {serviceSubLinks.map((sub, i) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-5 py-3 transition-colors hover:bg-[#FAF9F5] ${
                          i !== 0 ? 'border-t border-[#EDEBE2]' : ''
                        }`}
                      >
                        <p className={`text-sm font-semibold ${pathname === sub.href ? 'text-[#3D6B4C]' : 'text-[#1F3328]'}`}>
                          {sub.name}
                        </p>
                        <p className="text-xs text-[#8C8A7E] mt-0.5">{sub.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/blog" className={linkClasses(pathname === '/blog')}>
              Blog
            </Link>
          </div>

          {/* CTA + BOTÓN MÓVIL */}
          <div className="flex items-center justify-end space-x-3 z-50">
            <Link
              href="/contacto"
              className={`hidden sm:inline-flex px-6 py-3 rounded-lg font-semibold text-sm min-[1330px]:text-base transition-all ${
                pathname === '/contacto'
                  ? 'bg-[#1F3328] text-white'
                  : 'bg-[#3D6B4C] text-white hover:bg-[#1F3328]'
              }`}
            >
              Contáctenos
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#1F3328] rounded-lg min-[1330px]:hidden hover:bg-[#EDEBE2]/60 transition-colors"
              aria-label="Alternar menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* PANEL MÓVIL */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-[#1F3328] z-40
          flex flex-col justify-between overflow-y-auto min-[1330px]:hidden
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/10">
            <span className="font-serif italic text-lg text-white">Menú</span>
          </div>

          <ul className="flex flex-col px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === link.href ? 'text-white' : 'text-[#C9CFC7] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between py-3 text-lg font-medium transition-colors ${
                  isServiceActive ? 'text-white' : 'text-[#C9CFC7] hover:text-white'
                }`}
              >
                Servicios
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-60 mt-1' : 'max-h-0'}`}>
                {serviceSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block py-2.5 pl-4 text-[15px] text-[#C9CFC7] hover:text-white border-l border-white/15"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/blog"
                className={`block py-3 text-lg font-medium transition-colors ${
                  pathname === '/blog' ? 'text-white' : 'text-[#C9CFC7] hover:text-white'
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-6 pb-8">
          <Link
            href="/contacto"
            className="block py-3.5 px-6 bg-[#A47750] text-white font-semibold rounded-lg text-center"
          >
            Contáctenos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;