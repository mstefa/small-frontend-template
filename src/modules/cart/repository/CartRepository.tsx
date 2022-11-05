import { CartRequestType } from '../types/CartTypes';

async function retrieveCart(): Promise<CartRequestType[]> {
  return fetch(`https://fakestoreapi.com/carts/user/2`)
    .then((response) => response.json())
    .then((json) => {
      console.error(json);
      return json as CartRequestType[];
    });
}

export { retrieveCart };
