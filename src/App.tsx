import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900">
        
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/home" element={<Home />} />
            
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
