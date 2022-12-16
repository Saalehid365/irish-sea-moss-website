import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Store } from "./pages/shop/store";
import { Cart } from "./pages/cart/cart";
import { Banner } from "./components/banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
