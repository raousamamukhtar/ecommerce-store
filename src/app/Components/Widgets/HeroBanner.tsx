"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import s1 from "../../../../public/slide-1.png";
import s2 from "../../../../public/slide-2.png";
import s3 from "../../../../public/slide-3.png";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div>
      <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute left-0 md:right-[51px] top-80 w-[30px] md:w-[50px] h-[30px] md:h-[50px] -black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 top-80 w-[30px] md:w-[50px] h-[30px] md:h-[50px] -black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <Image
              src={s1}
              className="aspect-[16/10] md:aspect-auto object-cover"
              alt={""}
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>

          <div>
            <Image
              src={s2}
              className="aspect-[16/10] md:aspect-auto object-cover"
              alt="carousel"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>

          <div>
            <Image
              src={s3}
              className="aspect-[16/10] md:aspect-auto object-cover"
              alt={""}
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
