import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 inset-s-0 border-b border-white/10 backdrop-blur-md bg-white/70">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-bukue-dark">
            BUKUË<span className="text-bukue-light">.</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3">
          <Link 
            href="#contacto" 
            className="text-white bg-bukue-primary hover:bg-bukue-dark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 transition-all"
          >
            Contáctanos
          </Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li><Link href="/" className="block py-2 px-3 text-bukue-dark hover:text-bukue-primary">Inicio</Link></li>
            <li><Link href="#servicios" className="block py-2 px-3 text-bukue-dark hover:text-bukue-primary">Servicios</Link></li>
            <li><Link href="#nosotros" className="block py-2 px-3 text-bukue-dark hover:text-bukue-primary">Nosotros</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;