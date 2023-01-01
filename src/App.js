import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Store } from "./pages/shop/store";
import { Cart } from "./pages/cart/cart";
import { Banner } from "./components/banner";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";
import { About } from "./pages/About/about";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { Description } from "./pages/shop/description";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Banner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/description" element={<Description />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
