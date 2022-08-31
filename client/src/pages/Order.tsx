import React, { useState } from "react";
import { useParams } from "react-router-dom";

import OrderDetails from "../components/OrderDetails";

const Order = () => {
  const orderId = useParams();
  return <OrderDetails orderId={orderId} />;
};

export default Order;
