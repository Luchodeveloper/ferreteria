import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Catalogo from "./pages/Catalogo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;