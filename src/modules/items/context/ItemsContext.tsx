import { createContext, ReactNode, useContext } from 'react';
import { useItems } from '../hooks/useItems';
import { Item } from '../types/ItemTypes';

type ItemsContextType = {
  items: Item[];
};

type ItemsProviderProps = {
  children: ReactNode;
};

const ItemsContext = createContext({} as ItemsContextType);

const useItemsContext = () => {
  const products = useContext(ItemsContext);
  return products;
};

const ItemsContextProvider = ({ children }: ItemsProviderProps) => {
  const { items } = useItems();
  return (
    <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>
  );
};

export { ItemsContextProvider, useItemsContext };
