import { Graph } from '../modules/graph/Graph';
import { Navbar } from '../modules/shared/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Home1</h1>
      <Graph></Graph>
    </>
  );
}
