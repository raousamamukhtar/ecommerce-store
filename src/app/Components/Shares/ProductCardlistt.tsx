"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { Image as IImage } from "sanity";

async function getProductData() {
  const res = await client.fetch(
    `*[_type == 'product' ] {
    title,
      Dprice,
      Fprice,
      _id,
      image,
      description,
      category -> {
        name
      }
  }`
  );
  return res;
}
export default  function ProductCard() {
  // var data: Iproduct[] = [];
 
const [data, setData] = useState([]);
const [loader, setLoader] = useState({
  pageLoading: false,
  buttonLoading: false,
});
useEffect(() => {
  // setLoader({ ...loader, pageLoading: true });
  async function getData() {
    const data = await getProductData();
    setData(data);
    // setLoader({ ...loader, pageLoading: false });
  }
  getData();
}, []);
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-2 gap-2 ">
      {data.map((product: any) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer mb-8"
          >
            <Image
              width={400}
              height={400}
              src={urlForImage(product.image[0] as IImage)
                .width(400)
                .height(300)
                .url()}
              alt={"product"}
            />
            <div className="p-4 text-black/[0.9]">
              <h2 className="text-lg font-medium">{product.title}</h2>
              <div className="flex  justify-between items-center text-black/[0.5]">
                <div className=" flex justify-start">
                  <p className="mr-2 text-lg font-semibold">
                    &#8377;{product.Dprice}
                  </p>
                  <p className="text-base  font-medium line-through">
                    &#8377;{product.Fprice}
                  </p>
                </div>
                <div className=" flex ">
                  <p className="text-base font-medium text-green-500">
                    {(
                      100 -
                      (parseInt(product.Dprice) / parseInt(product.Fprice)) *
                        100
                    ).toFixed(0)}
                    % off
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
