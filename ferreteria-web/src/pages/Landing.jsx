import Header from "../componentes/Header";
import Home from "../componentes/Home";
import About from "../componentes/About";
import Store from "../componentes/Store";
import Contact from "../componentes/Contact";
import Footer from "../componentes/Footer";
import Informacion from "../componentes/Informacion";
import Brands from "../componentes/Brands";
import WhatsAppButton from "../componentes/WhatsAppButton";
 

export default function Landing() {
  return (
    <>
      <Header />
      <main className="pt-9">
        <Home />
        <Informacion />
        <About />
        <Store />
        <Brands />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
       
    </>
  );
}