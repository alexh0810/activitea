import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orders/:orderId" element={<Order />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
