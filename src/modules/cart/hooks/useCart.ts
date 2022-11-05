import { useEffect, useState } from "react";
import { retrieveItem } from "../../items/repository/ItemRepository";
import { retrieveCart } from "../repository/CartRepository";
import { CartType } from "../types/CartTypes";

export const useCart = () => {
  
  const [cart, setCart] = useState({} as CartType);

  useEffect(() => {

    const fetchData = async () => {
      const carts = await retrieveCart()
      const cart = carts[0];
      const items = cart.products.map( item => {
        return retrieveItem(item.productId)
      })
      const solved = await Promise.all(items)
      return{
        id: cart.id,
        userId : cart.userId,
        date: cart.date,
        products : solved,
      }
    }

    fetchData().then(
      completeCart => setCart(completeCart)
    )
    
    

    // retrieveCart().then((carts) => {
    //   const cart = carts[0];
    //   const items = cart.products.map( item => {
    //     return retrieveItem(item.productId)
    //   })
    //   return {
    //     id: cart.id,
    //     userId : cart.userId,
    //     date: cart.date,
    //     products : items,
    //   }})
    //   .then(completeCart => setCart(completeCart));
    // }

  }, []);

  return cart
}