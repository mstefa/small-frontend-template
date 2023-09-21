import { Graph } from '../modules/graph/Graph';
import { Button } from '@nextui-org/react';

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>Press me</Button>

      <Graph></Graph>
    </>
  );
}
