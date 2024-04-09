export interface Order {
  id: string;
  userId: string;
  products: Product[];
  payment: Payment;
}

export interface Product {
  productId: string;
  quantity: number;
}

export interface Payment {
  method: string;
  status: string;
}
