import Head from "next/head";
import React from "react";
import HeroBanner from "./Components/Widgets/HeroBanner";
import ProductCard from "./Components/Shares/ProductList";
import Wrapper from "./Components/Shares/Wrapper";
import Minitext from "./Components/Shares/Minitext";
import ProductCardGrid from "./Components/Widgets/ProductCardGrid";
import ProductDetailsCarousel from "./Components/Shares/ProductDetailsCarousel";

export default function page() {
  return (
    <>
      <HeroBanner />
      <Minitext />
      <ProductCardGrid />
    </>
  );
}
