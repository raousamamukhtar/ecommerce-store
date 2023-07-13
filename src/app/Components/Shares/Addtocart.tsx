"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartslice";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Addtocart(props: { item: any }) {
  const dispatch = useDispatch();
  const additem = () => {
    dispatch(
      cartActions.addToCart({
        quantity: 1,
        product: props.item,
        price: props.item.Dprice,
      })
    );
    toast.success(` ${props.item.title} shoe added to cart`);
  };

  return (
    <div>
      <button
        className="flex gap-3 w-full justify-center py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        onClick={additem}
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
}
