import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Columna izquierda */}
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-10 text-gray-800">
              Nuestra Ubicación 
            </h2>

            <div className="space-y-8">

              {/* Dirección */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-6">
                <div className="w-12 flex justify-center">
                  <FaLocationDot className="text-red-500 text-3xl" />
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Hipólito Yrigoyen 774<br />
                    Pergamino, Buenos Aires
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-6">
                <div className="w-12 flex justify-center">
                  <FaPhone className="text-blue-600 text-3xl" />
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                  <p className="text-gray-600">
                    <a href="tel:2477416724" className="hover:text-blue-600 transition">
                      2477-416724
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-6">
                <div className="w-12 flex justify-center">
                  <FaEnvelope className="text-yellow-500 text-3xl" />
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 break-all">
                    <a
                      href="mailto:bulonerahipolito@gmail.com"
                      className="hover:text-blue-600 transition"
                    >
                      bulonerahipolito@gmail.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Columna derecha - Mapa */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full min-h-[600px]">
              <iframe
                title="Mapa Ferretería"
                src="https://www.google.com/maps?q=Av+Hipolito+Yrigoyen+774+Pergamino+Buenos+Aires&z=17&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}