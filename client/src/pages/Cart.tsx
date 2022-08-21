import React from "react";
import CartTable from "../components/CartTable";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <CartTable />
      <Footer />
    </div>
  );
};

export default Cart;
