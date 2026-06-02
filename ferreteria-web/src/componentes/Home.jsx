import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden" >
    
      {/* IMAGEN FULL WIDTH */}
      <img
        src="/productos/bulonera10.webp"
        alt="Bulonera Hipólito"
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom  " />

      {/* CAPA OSCURA SUAVE PARA MEJORAR CONTRASTE */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* TARJETA */}
      {/* TARJETA */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div
          className={`
            bg-white/80 rounded-xl p-10 max-w-md w-full
            shadow-2xl
            transform transition-all duration-700
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Bienvenidos a Bulonera Hipólito
          </h2>

          <p className="text-2xl md:text-2xl font-bold">
            Un lugar de soluciones
          </p>
        </div>
      </div>
    </section>
  );
}