import { useState } from "react";
import Header from "./Component/Header";
import "./App.css";
import Slider from "./Component/Slider";
import ProductionHouse from "./Component/ProductionHouse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Slider />
        <ProductionHouse />
      </div>
    </>
  );
}

export default App;
