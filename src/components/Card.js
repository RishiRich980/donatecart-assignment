import React from "react";

function Card({ data, selectCurrency }) {
  return (
    <div
      style={{
        width: "200px",
        height: "250px",
        margin: "10px",
        border: "solid",
      }}
    >
      <img src={data.imageUrl} alt="new" height="150px" width="150px" />
      <p> {data.name} </p>
      <p> {selectCurrency == "INR" ? data.rate.INR : data.rate.USD} </p>
    </div>
  );
}

export default Card;
