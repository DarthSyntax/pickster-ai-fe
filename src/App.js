import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Searchbar from "./components/searchbar/searchbar";
import ImageContainer from "./components/image-container/image-container";

function App() {
  const [images, setImages] = useState();
  return (
    <div className="App">
      <Header />
      <Searchbar setImages={setImages} />

      <ImageContainer images={images} />
    </div>
  );
}

export default App;
