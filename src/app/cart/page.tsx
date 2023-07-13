"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Image as IImage } from "sanity";
import Wrapper from "../Components/Shares/Wrapper";
import { RootState } from "@/store/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { urlForImage } from "../../../sanity/lib/image";
import Counter from "../Components/Shares/Counter";
import StripeCheckOutButton from "../Components/Shares/Checkout";

const Cart = () => {
  const cartproduct = useSelector(
    (state: RootState) => state.counterSlice.items
  );
  const totalquantity = useSelector(
    (state: RootState) => state.counterSlice.totalQuantity
  );
  const totalAmount = useSelector(
    (state: RootState) => state.counterSlice.totalAmount
  );
  console.log(cartproduct);
  return (
    <div className="w-full  mt-20">
      <Wrapper>
        {totalquantity > 0 ? (
          <>
            <div className="text-center max-w-[800px] mx-auto ">
              <div className=" mt-28 text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            {/* <div className="flex flex-col  gap-12 py-10"> */}
            <div className=" lg:flex gap-4">
              <div className=" lg:w-2/3">
                {cartproduct.map((item) => (
                  <div className="flex flex-col" key={item._id}>
                    <div className="text-lg font-bold">
                      <div className="flex py-5 gap-3 md:gap-5 border-b">
                        {/* IMAGE START */}
                        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                          <Image
                            width={150}
                            height={150}
                            src={urlForImage(item.image[0] as IImage)
                              .width(150)
                              .height(150)
                              .url()}
                            alt={"product"}
                          />
                        </div>
                        {/* IMAGE END */}

                        <div className="w-full flex flex-col">
                          <div className="flex flex-col  justify-between">
                            {/* PRODUCT TITLE */}
                            <div className="text-lg  font-semibold text-black/[0.8]">
                              {item.title}
                            </div>
                            <div className=" flex justify-between ">
                              {/* PRODUCT PRICE */}
                              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                                MRP : &#8377; {item.Dprice}
                              </div>
                              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 ml-20">
                                Quantity
                              </div>
                              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                                TRP : {item.totalPrice}
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                                {" "}
                                Size : {item.sizes[0]}{" "}
                                <select className="hover:text-black">
                                  return (<option></option>
                                  );
                                </select>
                              </div>
                              <div className=" flex justify-end">
                                <Counter product={item} />
                              </div>
                              <div>
                                <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" lg:w-1/3">
                <div className="flex-[1]">
                  <div className="text-lg font-bold">Summary</div>

                  <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                    <div className="flex justify-between">
                      <div className="uppercase text-md md:text-lg font-medium text-black">
                        Subtotal
                      </div>
                      <div className="text-md md:text-lg font-medium text-black">
                        &#8377;{totalAmount}
                      </div>
                    </div>
                    <div className="text-sm md:text-md py-5 border-t mt-5">
                      The subtotal reflects the total price of your order,
                      including duties and taxes, before any applicable
                      discounts. It does not include delivery costs and
                      international transaction fees.
                    </div>
                  </div>
                </div>

                <StripeCheckOutButton product={cartproduct} />
              </div>
            </div>

            {/* </div> */}
          </>
        ) : (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt={""}
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
