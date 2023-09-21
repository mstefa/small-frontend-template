import { Row, Col } from 'react-bootstrap';
import { Item } from '../modules/items/components/Item';
import { useItemsContext } from '../modules/items/context/ItemsContext';

export function Store() {
  const { items } = useItemsContext();

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}
