import axios from "axios";
import { useState, useEffect } from "react";

import { Order } from "../types/order";

export const useGetOrder = (orderId: string | undefined) => {
  const [order, setOrder] = useState<Partial<Order> | undefined>(undefined);

  useEffect(() => {
    if (orderId) {
      try {
        axios
          .get(`https://activitea-be.herokuapp.com/api/v1/orders/${orderId}`)
          .then(function (response) {
            setOrder(response.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [orderId]);
  return order;
};
