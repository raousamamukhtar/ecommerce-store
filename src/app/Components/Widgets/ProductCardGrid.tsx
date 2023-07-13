import React from "react";
import Wrapper from "../Shares/Wrapper";
import ProductCard from "../Shares/ProductList";

export default function ProductCardGrid() {
  return (
    <div>
      <Wrapper>
        <div>
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
}
