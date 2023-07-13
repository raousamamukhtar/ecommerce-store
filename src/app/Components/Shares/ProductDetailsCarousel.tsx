"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import { urlForImage } from "../../../../sanity/lib/image";

export default function ProductDetailsCarousel({ images }: any) {
  return (
    <div>
      <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images.map((img: any) => (
            <div>
              <img
                src={urlForImage(img).width(400).height(300).url()}
                className="aspect-auto md:aspect-auto object-contain w-200 h-100"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
