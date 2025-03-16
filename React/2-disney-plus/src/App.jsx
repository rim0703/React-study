import { useState } from "react";
import Header from "./Component/Header";
import "./App.css";
import Slider from "./Component/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Slider />
      </div>
    </>
  );
}

export default App;
