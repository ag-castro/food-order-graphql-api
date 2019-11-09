import { Document, Schema, Types } from 'mongoose'
import { OrderItemSubDocument, User } from '.'

export enum OrderStatus {
  WAITING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVERED,
}

export interface Order {
  _id: Schema.Types.ObjectId
  user: User | Schema.Types.ObjectId
  total: number
  status: OrderStatus
  items: Types.DocumentArray<OrderItemSubDocument>
  createdAt: string
  updatedAt: string
}

export interface OrderDocument extends Order, Document {
  _id: Schema.Types.ObjectId
}
