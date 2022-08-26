export interface Product {
  _id: string;
  title: string;
  prices: [number];
  description: string;
  size: ["M", "L"] | ["M"] | ["L"];
  image: string;
}
