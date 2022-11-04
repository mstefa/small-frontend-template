import { useEffect, useState } from 'react';
import { retrieveItems } from '../repository/ItemRepository';
import { Item } from '../types/ItemTypes';

export const useItems = () => {
  const [items, setItems] = useState([] as Item[]);

  useEffect(() => {
    retrieveItems()
      .then((items) => {
        setItems(items);
      })
      .catch((error) => console.error(error));
  }, []);

  return {
    items,
  };
};
