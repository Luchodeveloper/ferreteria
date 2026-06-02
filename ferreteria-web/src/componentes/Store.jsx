import { useState } from "react";
import productos from "../data/productos";
import { Link } from "react-router-dom";

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // solo mostramos 4 destacados en la landing
  const destacados = productos.slice(0, 4);

  return (
    <section id="store" className="py-20 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Productos
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destacados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-xl shadow-md overflow-hidden
                         hover:shadow-2xl transition duration-300
                         hover:-translate-y-2"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {producto.nombre}
                </h3>

                <button
                  onClick={() => setSelectedProduct(producto)}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón futuro catálogo */}
      <div className="text-center mt-12">
  <Link
    to="/Catalogo"
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition inline-block">
    Ver catálogo completo
  </Link>
</div>
</div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProduct.imagen}
              alt={selectedProduct.nombre}
              className="w-full h-60 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-bold text-red-600 mb-4">
              {selectedProduct.nombre}
            </h3>

            <p className="text-gray-700 mb-6">
              {selectedProduct.descripcion}
            </p>

           {/* <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Consultar producto
            </button>*/}
          </div>
        </div>
      )}
    </section>
  );
}