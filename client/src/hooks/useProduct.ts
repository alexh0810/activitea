import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";

import { Product } from "../types/product";

export const useProduct = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (productId) {
      try {
        axios.get(`/products/${productId}`).then(function (response) {
          setProduct(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [productId]);
  return product;
};
