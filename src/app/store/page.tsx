'use client';
// TODO: move a server side
import { Row, Col } from 'react-bootstrap';
import { Item } from '../../modules/items/components/Item';
import { useItemsContext } from '../../modules/items/context/ItemsContext';
import { Navbar } from '../../modules/shared/components/Navbar';

export default function Store() {
  const { items } = useItemsContext();

  return (
    <>
      <Navbar></Navbar>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Item {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
