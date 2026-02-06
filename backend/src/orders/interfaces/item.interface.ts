export interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: {
    currency: string;
    amount: number;
  };
}
