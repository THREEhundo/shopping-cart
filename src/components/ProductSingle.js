import React from "react";
import { useParams } from "react-router-dom";

const ProductSingle = (props) => {
  const { id } = useParams();
  return <div>You are on page {id}</div>;
};

export default ProductSingle;
