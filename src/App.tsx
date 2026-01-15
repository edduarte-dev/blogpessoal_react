import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
