export default function About() {
  return (
    <section  id="about" className="w-full bg-gray-200 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Nuestra Trayectoria
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center">

          {/* Imagen */}
          <div className="md:w-2/3 rounded-xl overflow-hidden shadow-xl">
            <img
              src="/productos/rodri.png"
              alt="Ferretería"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tarjeta superpuesta */}
          <div
  className="
    md:absolute
    md:right-0
    md:w-1/2

    relative
    -mt-16 md:-mt-0

    w-[92%] md:w-1/2
    mx-auto md:mx-0

    min-h-[300px] md:min-h-[400px]
   bg-red-600/90 text-white
    p-6 md:p-8
    rounded-xl shadow-2xl
    flex items-center

    transition-all duration-500
    hover:scale-105
  "
>
           <p className="text-base md:text-lg leading-relaxed text-justify">
    Somos una ferretería con trayectoria y compromiso, donde cada cliente encuentra no solo productos de calidad, sino también asesoramiento y confianza. Acompañamos obras, reparaciones y proyectos del día a día, ofreciendo soluciones prácticas y atención personalizada.
  </p>
          </div>

        </div>
      </div>
    </section>
  );
}
