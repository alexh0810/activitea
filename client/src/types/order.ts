export interface Order {
  customer: string;
  address: string;
  total: number;
  status: 0 | 1 | 2 | 3;
}
