import { createContext, useContext } from "react";
import { Item } from "../types/ItemTypes";



type ItemsContextType = {
  items: Item[]
}

const ItemsContext  = createContext({} as ItemsContextType);

const useItemsContext = () => {
  const products = useContext(ItemsContext);
  return products;
}


export { ItemsContext , useItemsContext  };