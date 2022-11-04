import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./modules/shared/components/Navbar"
import { ItemsContext } from "./modules/items/context/ItemsContext"
import { useItems } from "./modules/items/hooks/useItems"

function App() {
  const {items} = useItems();
  return (
    <ItemsContext.Provider value={{ items }} >
      <Container className="mb-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ItemsContext.Provider>
  );
}

export default App;
