import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-red-600 text-white
        transition-all duration-300
        ${scrolled ? "py-3 shadow-lg" : "py-5"}
      `}
    >
     
      {/* CONTENEDOR PRINCIPAL */}
      <div className="px-6 md:px-12 flex items-center justify-between">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-5">
          <img
            src="/productos/logo 5.png" 
            alt="Logo"
          className={`transition-all duration-300 ${
              scrolled ? "h-10 w-19" : "h-10 w-19"
            }`}
          />
        </div>
 <ThemeToggle />
        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6">
             {[
            { id: "home", label: "Inicio" },
            { id: "info", label: "Info" },
            { id: "about", label: "Nosotros" },
            { id: "store", label: "Productos" },
            { id: "contact", label: "Contacto" },
          ].map((item) => (
           <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`relative pb-1 transition-colors duration-300
                ${
                  active === item.id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }
              `}
            >
              {item.label}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0"}
                `}
              />
            </a>
          ))}
        </nav>

        {/* BOTÓN HAMBURGUESA MOBILE */}
      <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
>
  <span
    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
      menuOpen ? "rotate-45 translate-y-1.5" : ""
    }`}
  />
  <span
    className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
      menuOpen ? "opacity-0" : ""
    }`}
  />
  <span
    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
      menuOpen ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  />
</button>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      {menuOpen && (
       <div
  className={`md:hidden bg-red-600 overflow-hidden transition-all duration-500 ease-in-out ${
    menuOpen
      ? "max-h-96 opacity-100 py-6"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="flex flex-col items-center gap-6 text-lg">
    <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>Nosotros</a>
    <a href="#store" onClick={() => setMenuOpen(false)}>Productos</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
    
  </div>
</div>


      )}
   
    </header>
  );
}