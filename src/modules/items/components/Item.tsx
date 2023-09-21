// import { Button, Card } from 'react-bootstrap';
import { ItemType } from '../types/ItemTypes';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  CardHeader,
} from '@nextui-org/react';

export function Item(item: ItemType) {
  return (
    <Card
      shadow="sm"
      key={item.id}
      isPressable
      onPress={() => console.log('item pressed')} //TODO
    >
      <CardBody className="overflow-visible p-0 ">
        <CardHeader className="absolute z-10 flex-col items-start  bg-white/60 ">
          <h4 className="text-black font-medium text-2xl ">{item.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover opacity-100"
          alt={item.title}
          src={item.imgUrl}
        />
        <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between max-h-20">
          <div>
            <p className="text-black text-tiny">{item.description}</p>
          </div>
          <Button className="text-tiny" color="primary">
            add to Cart
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
