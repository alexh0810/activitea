import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:productId" element={<SingleProduct />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orders/:orderId" element={<Order />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
