import { FaPhoneAlt, FaCreditCard, FaClock } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Informacion() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="info"
      ref={sectionRef}
      className="py-20 bg-gray-100 border-t-4 border-red-600">
      <div
        className={`
          max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* TELEFONO */}
        <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center mb-4 text-red-600 text-3xl group-hover:text-yellow-500 transition">
            <FaPhoneAlt />
          </div>
          <h3 className="font-bold text-lg mb-2">TELÉFONO</h3>
          <p className="text-gray-700">2477–309587</p>
        </div>

        {/* FORMAS DE PAGO */}
        <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center mb-4 text-red-600 text-3xl group-hover:text-yellow-500 transition">
            <FaCreditCard />
          </div>
          <h3 className="font-bold text-lg mb-2">FORMAS DE PAGO</h3>
          <p className="text-gray-700">
            Efectivo, Visa, Master, Cabal
          </p>
        </div>

        {/* HORARIOS */}
        <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center mb-4 text-red-600 text-3xl group-hover:text-yellow-500 transition">
            <FaClock />
          </div>
          <h3 className="font-bold text-lg mb-2">HORARIOS</h3>
          <p className="text-gray-700">
            Lun. a Vie. 8:00–12:30 y 16:00–20:00 hs. <br />
            Sáb. 8:30–13:00 hs.
          </p>
        </div>
      </div>
    </section>
  );
}
