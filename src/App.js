import "./App.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";

//config react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
      {/* Navbar deve ser renderizado antes das rotas dinamicas */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
