import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8">

      {/* Línea roja premium */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

     {/* Columna 1 - Logo */}
<div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">  
  <img
    src="/productos/logo 5.png"
    alt="Logo"
    className="h-14 w-auto"
  />
  <p className="text-gray-400 text-xs uppercase tracking-widest">
  Un lugar de soluciones
</p>
</div>


        {/* Columna 2 - Navegación */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Navegación
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#store" className="hover:text-red-500 transition">
                Productos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Redes */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white mb-4">
            Seguinos
          </h4>

            <div className="flex justify-center gap-6">
  <a
    href="https://www.facebook.com/p/Bulonera-Hipolito-Ferreteria-100045574824921/?locale=es_LA"
    className="group w-10 h-10 flex items-center justify-center
               rounded-full transition-all duration-300
               hover:bg-red-600">
    <FaFacebookF className="text-gray-300 group-hover:text-white transition-colors duration-300" />
  </a>

  <a
    href="https://www.instagram.com/bulonerahipolito/?hl=es"
    className="group w-10 h-10 flex items-center justify-center
               rounded-full transition-all duration-300
               hover:bg-red-600">
    <FaInstagram className="text-gray-300 group-hover:text-white transition-colors duration-300" />
  </a>
</div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bulonera Hipólito.
      </div>

    </footer>
  );
}
