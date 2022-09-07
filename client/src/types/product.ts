export interface Product {
  _id: string;
  title: string;
  prices: [number];
  description: string;
  size: ["M", "L"] | ["M"] | ["L"];
  image: string;
}

export interface updatedProduct {
  productId: string;
  prices: [number];
  size: ["M", "L"] | ["M"] | ["L"];
}
