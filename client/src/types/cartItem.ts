export interface CartItem {
  _id: string;
  title: string;
  prices: [number];
  price: number;
  quantity: number;
  description: string;
  size: ["M", "L"] | ["M"] | ["L"];
  image: string;
}
