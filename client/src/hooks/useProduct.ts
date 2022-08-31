import axios from "axios";
import { useState, useEffect } from "react";

import { Product } from "../types/product";

export const useProduct = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (productId) {
      try {
        axios
          .get(`https://activitea-be.herokuapp.com/api/v1/products/${productId}`)
          .then(function (response) {
            setProduct(response.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [productId]);
  return product;
};
