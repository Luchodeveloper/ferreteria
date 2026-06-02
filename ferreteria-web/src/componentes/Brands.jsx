export default function Brands() {
  const marcas = [
    { id: 1, logo: "/productos/wurth logo.png" },
    { id: 2, logo: "/productos/nebraska logo.jpg" },
    { id: 3, logo: "/productos/acme logo.png" },
    { id: 4, logo: "/productos/3m logo.png" },
    { id: 5, logo: "/productos/wurth logo.png" },
    { id: 6, logo: "/productos/nebraska logo.jpg" },
    { id: 7, logo: "/productos/acme logo.png" },
    { id: 8, logo: "/productos/3m logo.png" },  
  ];

  return (
   <section className="relative py-20 bg-gray-100  overflow-hidden">


    {/* Línea superior */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>

      <h2 className="text-4xl font-bold text-center text-black-600 mb-12">
        Nuestras marcas
        <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-8 w-max">
          {[...marcas, ...marcas].map((marca, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-10 py-6
                         flex items-center justify-center
                         min-w-[200px]
                         hover:shadow-xl transition duration-300"
    >
              <img
                src={marca.logo}
                alt="Marca"
                className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
       {/* Línea inferior */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
    </section>
  );
}
