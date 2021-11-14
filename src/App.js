import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/products/ProductContainer";
// import DataGridMUI from "./playground/DataGridMUI";
// import GridMUI from "./playground/GridMUI";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      {/* <GridMUI /> */}
      {/* <DataGridMUI /> */}
    </>
  );
}

export default App;
