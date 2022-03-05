import React, { useState, useEffect } from "react";
import Card from "../src/components/Card";
import Dropdown from "../src/components/DropDown";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "NoteBook",
    imageUrl: "https://m.media-amazon.com/images/I/61fdtieQOvL._SY450_.jpg",
    base: "INR",
    rate: {
      INR: "70",
      USD: "",
    },
  },
  {
    id: 2,
    name: "Pen",
    imageUrl: "https://m.media-amazon.com/images/I/51Wj4k2FYPL._SL1100_.jpg",
    base: "INR",
    rate: {
      INR: "120",
      USD: "",
    },
  },
  {
    id: 3,
    name: "Crayons",
    imageUrl: "https://m.media-amazon.com/images/I/81txiZmZtpL._SL1500_.jpg",
    base: "INR",
    rate: {
      INR: "140",
      USD: "",
    },
  },
];

function Products() {
  const [items, setItems] = useState(products);
  const [selectCurrency, setSelectCurrency] = useState("INR");
  const getCurrency = async () => {
    let { data } = await axios.get(
      "https://v6.exchangerate-api.com/v6/69cf5007d037ba7e98ff328a/latest/INR"
    );
    if (data.result === "success") {
      setItems(
        items.map((value) => {
          return {
            ...value,
            rate: {
              ...value.rate,
              USD: value.rate.INR * data.conversion_rates.USD,
            },
          };
        })
      );
    } else {
      setItems({});
    }
  };
  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <div
      style={{
        minHeight: "85vh",
        width: "100%",
        padding: "20px",
        background: "#ededed",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {items?.map((value) => (
        <Card key={value.id} data={value} selectCurrency={selectCurrency} />
      ))}
      <Dropdown
        items={items}
        setItems={setItems}
        selectCurrency={selectCurrency}
        setSelectCurrency={setSelectCurrency}
      />
    </div>
  );
}

export default Products;
