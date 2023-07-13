"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
export default function ProductDetailsCarousel({ images }: any) {
  console.log("images", images);
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
          {images.map((img: any, index: any) => (
            <div key={index}>
              <Image
                alt="Image"
                src={urlForImage(img).width(400).height(300).url()}
                width={100}
                height={100}
                className="aspect-auto md:aspect-auto object-contain w-200 h-100"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
