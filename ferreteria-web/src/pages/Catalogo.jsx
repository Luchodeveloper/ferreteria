import { useState } from "react";
import productos from "../data/productos";
import { Link } from "react-router-dom";

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Categorías dinámicas
  const categorias = [
    "Todas",
    ...new Set(productos.map((p) => p.categoria)),
  ];

  // Filtrado
  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaActiva === "Todas" ||
      producto.categoria === categoriaActiva;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="pt-20 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
    <div className="absolute top-6 left-6">

    
    {/* NAV SOLO CON LOGO */}
    <div className="fixed top-0 left-0 w-full bg-red-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <Link to="/">
          <img
            src="../productos/logo 5.png"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </Link>
      </div>
    </div>
 
</div>
        <h2 className="text-4xl font-bold text-center mb-8">
          Catálogo Completo
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        {/* Buscador */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border p-3 rounded w-full max-w-md shadow"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-lg border transition ${
                categoriaActiva === cat
                  ? "bg-red-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Productos */}
        {productosFiltrados.length === 0 ? (
          <p className="text-center text-gray-600">
            No se encontraron productos.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productosFiltrados.map((producto) => (
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
        )}
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

           {/*<button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Consultar producto
            </button>*/}
            
          </div>
        </div>
      )}
    </section>




  );
}