// Order type definitions
export interface Order {
  id: string
  status: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  name: string
}

