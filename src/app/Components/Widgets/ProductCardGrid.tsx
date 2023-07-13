import React from "react";
import Wrapper from "../Shares/Wrapper";
import ProductCard from "../Shares/ProductCardlistt";

export default function ProductCardGrid() {
  return (
    <div>
      <Wrapper>
        <div>
          {/* @ts-ignore */}
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
}
