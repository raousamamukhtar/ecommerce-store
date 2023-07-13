import React from "react";
import HeroBanner from "./Components/Widgets/HeroBanner";

import Minitext from "./Components/Shares/Minitext";
import ProductCardGrid from "./Components/Widgets/ProductCardGrid";

export default function page() {
  return (
    <>
      <HeroBanner />
      <Minitext />
      <ProductCardGrid />
    </>
  );
}
