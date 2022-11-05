import { ItemType } from "../../items/types/ItemTypes"

export type CartType = {
  id: string
  userId: string
  date: Date
  products: ItemType[]
}

export type CartRequestType = {
  id: string
  userId: string
  date: Date
  products: ItemCartRequestType[]
}

export type ItemCartRequestType = {
  productId: string
  quantity: number
}