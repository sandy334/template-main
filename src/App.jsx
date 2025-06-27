import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./redux/slices/themeSlice";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Electronics from "./pages/products/Electronics";
import Clothing from "./pages/products/Clothing";
import HomeLiving from "./pages/products/HomeLiving";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/electronics" element={<Electronics />} />
            <Route path="/products/clothing" element={<Clothing />} />
            <Route path="/products/home-living" element={<HomeLiving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
