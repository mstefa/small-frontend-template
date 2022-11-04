import { Row, Col } from 'react-bootstrap';
import { Item } from '../modules/items/components/Item';
import { useItemsContext } from '../modules/items/context/ItemsContext';

export function Store() {
  const { items } = useItemsContext();

  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map((item) => (
        <Col>
          <Item
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        </Col>
      ))}
    </Row>
  );
}
