import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../modules/items/components/StoreItem';
import { useItemsContext } from '../modules/items/context/ItemsContext';

export function Store() {
  const { items } = useItemsContext();

  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map((item) => (
        <Col>
          <StoreItem
            id={item?.id}
            name={item?.title}
            price={item?.price}
            imgUrl={item?.imgUrl}
          />
        </Col>
      ))}
    </Row>
  );
}
