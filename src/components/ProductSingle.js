import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductSingle = (props) => {
  const { linkID } = useParams();
  const { data, error, isPending } = useFetch(
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan"
  );

  // const singleCard = () => {
  //   if (id) {
  //     return data.map(snkr => {
  //       return (
  //         <div key={snkr.linkID}>
  //
  //         </div>
  //       )
  //     })
  //   }
  // }
  if (data) {
    const copy = data.map((x) => x);
    console.log(linkID);
    // const a = copy.reduce((x) => (x.linkID === linkID ? x : null));
    // console.log(a);
  }

  return <div>{linkID}</div>;
};

export default ProductSingle;
