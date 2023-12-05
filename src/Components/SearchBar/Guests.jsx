import React from "react";
import { ProductCalc } from "Components/Product/ProductCalc";

const Guests = () => {
  return (
    <div className="guest-counter">
      <ProductCalc searchBar />
    </div>
  );
};

export default React.memo(Guests);
