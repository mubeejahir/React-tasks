import React from "react";
import ProductList from "./productList";

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const Product = () => {
  return (
    <div>
      {data.map((value) => (
        <ProductList item={value} key={value.id} />
      ))}
      hello
    </div>
  );
};



export default Product;
