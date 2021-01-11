import React from "react";
import Products from "../components/Products";
import Filter from "../components/Filter";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="content">
      <div className="main">
        <Filter></Filter>
        <Products />
      </div>
      <div className="sidebar">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
