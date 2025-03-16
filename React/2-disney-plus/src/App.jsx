import { useState } from "react";
import Header from "./Component/Header";
import "./App.css";
import Slider from "./Component/Slider";
import ProductionHouse from "./Component/ProductionHouse";
import GenreMovieList from "./Component/GenreMovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </div>
    </>
  );
}

export default App;
