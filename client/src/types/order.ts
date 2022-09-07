export interface Order {
  _id: string;
  customer: string;
  address: string;
  total: number;
  status: 0 | 1 | 2 | 3;
}

export interface updatedOrder {
  orderId: string;
  address: string;
  updatedStatus: number;
}

