import React from "react";
import { client } from "../../../../sanity/lib/client";
import { Interface } from "readline";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { Image as IImage } from "sanity";
import { title } from "process";
interface Iproduct {
  title: "string";
  Dprice: "number";
  Fprice: "number";
  _id: "number";
  image: IImage;
  description: "string";
  category: {
    name: "string";
  };
}

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
  }`,
    {
      cache: "no-store",
    }
  );
  return res;
}
export default async function ProductCard() {
  const data: Iproduct[] = await getProductData();

  return (
    <div className=" grid lg:grid-cols-3 grid-cols-2 gap-2">
      {data.map((product) => (
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
                    (parseInt(product.Dprice) / parseInt(product.Fprice)) * 100
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
