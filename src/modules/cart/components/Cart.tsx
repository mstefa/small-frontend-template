import { useCart } from '../hooks/useCart';

export function Cart() {
  const cart = useCart();

  return (
    <div>
      {!cart.products
        ? 'loading..'
        : cart.products.map((e) => {
            return <p>{e.title}</p>;
          })}
    </div>
  );
}

// : cart.products.map((e) => {
//   return <p>{JSON.stringify(e)}</p>;
// })}
