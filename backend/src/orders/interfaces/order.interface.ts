import { OrderStatus } from "../order-status.enum";
import { OrderItem } from "./item.interface";

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  source?: string;
}
