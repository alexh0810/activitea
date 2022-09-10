import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";

import { Order } from "../types/order";

export const useGetOrder = (orderId: string | undefined) => {
  const [order, setOrder] = useState<Partial<Order> | undefined>(undefined);

  useEffect(() => {
    if (orderId) {
      try {
        axiosInstance.get(`/orders/${orderId}`).then(function (response) {
          setOrder(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [orderId]);
  return order;
};
