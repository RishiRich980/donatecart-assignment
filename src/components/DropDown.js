import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dropdown({ setSelectCurrency }) {
  return (
    <div>
      <select
        name="currency"
        id="currency"
        onChange={(e) => setSelectCurrency(e.target.value)}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Dropdown;
