import { Button, Card } from 'react-bootstrap';

type StoreItemProps = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

export function Item({ name, price, imgUrl }: StoreItemProps) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: '.5rem' }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: '.5rem' }}
            ></div>
            <Button variant="danger" size="sm">
              add
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
