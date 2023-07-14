"use client";
import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/app/Components/Shares/Wrapper";
import ProductDetailsCarousel from "@/app/Components/Shares/ProductDetailsCarousel";
import ReactMarkdown from "react-markdown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

import { FaSpinner } from "react-icons/fa";
import { getProductData } from "@/utils/mock";
import Addtocart from "@/app/Components/Shares/Addtocart";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState({
    pageLoading: false,
    buttonLoading: false,
  });
  useEffect(() => {
    // setLoader({ ...loader, pageLoading: true });
    async function getData() {
      const data = await getProductData(params.id);
      setData(data);
      // setLoader({ ...loader, pageLoading: false });
    }
    getData();
  }, [params.id]);
  // console.log("data", data);

  return (
    <>
      <div className="w-full md:py-20 lg:mt-16 mt-24">
        {/* {loader.pageLoading ? (
          <div className="flex justify-center animate-spin md:mt-8">
            <FaSpinner size={100} />
          </div>
        ) : ( */}
        <>
          <ToastContainer />
          <Wrapper>
            {data &&
              data.map((product: any) => (
                <div
                  className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] px-8"
                  key={product._id}
                >
                  {/* left column start */}
                  <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                    <ProductDetailsCarousel images={product.image} />
                  </div>
                  {/* left column end */}

                  {/* right column start */}
                  <div className="flex-[1] py-3 ">
                    {/* PRODUCT TITLE */}
                    <div className="lg:text-[34px] text-[24px] font-semibold mb-2 leading-tight">
                      {product.title}
                    </div>
                    {/* PRODUCT SUBTITLE */}
                    <div className="text-lg font-semibold mb-5"></div>
                    {/* PRODUCT PRICE */}
                    <div className="flex items-center">
                      <p className="mr-2 lg:text-lg text-sm font-semibold">
                        MRP : &#8377;{product.Dprice}
                      </p>

                      <>
                        <p className=" lg:text-lg text-sm  font-medium line-through">
                          &#8377;{product.Fprice}
                        </p>
                        <p className="ml-auto lg:text-lg text-sm font-medium text-red-500">
                          ( -
                          {(
                            (parseInt(product.Dprice) /
                              parseInt(product.Fprice)) *
                            100
                          ).toFixed(0)}
                          )
                        </p>
                      </>
                    </div>
                    <div className="text-md font-medium text-black/[0.5]">
                      incl. of taxes
                    </div>
                    <div className="text-md font-medium text-black/[0.5] lg:mb-20 mb-4">
                      {`(Also includes all applicable duties)`}
                    </div>
                    {/* PRODUCT SIZE RANGE START */}
                    <div className="mb-10">
                      {/* HEADING START */}
                      <div className="flex justify-between mb-2">
                        <div className="text-md font-semibold">Select Size</div>
                        <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                          Select Guide
                        </div>
                      </div>
                      {/* HEADING END */}

                      {/* SIZE START */}
                      <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                        <div
                          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer `}
                        >
                          US-6
                        </div>
                      </div>
                      {/* SIZE END */}

                      {/* SHOW ERROR START */}
                      <div className="text-red-600 mt-1">
                        Size selection is required
                      </div>

                      {/* SHOW ERROR END */}
                    </div>

                    <Addtocart item={product} />
                    {/* ADD TO CART BUTTON END */}
                    {/* WHISHLIST BUTTON START */}
                    <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                      Whishlist
                      <IoMdHeartEmpty size={20} />
                    </button>
                    {/* WHISHLIST BUTTON END */}
                    <div>
                      <div className="text-lg font-bold mb-5">
                        Product Details
                      </div>
                      <div className="markdown text-md mb-5">
                        <ReactMarkdown>{product.description}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  {/* right column end */}
                </div>
              ))}
            {/* right column end */}
          </Wrapper>
        </>
      </div>
      {/* <Wrapper>
        <RelatedProducts />
      </Wrapper> */}
    </>
  );
}
