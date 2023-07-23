import RootLayout from "@/app/layout";
import { cartActions } from "@/store/slice/cartslice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function Counter(props: { product: any }) {
  const dispatch = useDispatch();

  const additem = () => {
    dispatch(
      cartActions.addToCart({
        quantity: 1,
        product: props.product,
        price: props.product.Dprice,
      })
    );
  };
  const decrease = () => {
    dispatch(
      cartActions.decrement({
        quantity: 1,
        product: props.product,
        price: props.product.Dprice,
      })
    );
  };
  return (
    <>
      {/* <!-- component --> */}
      <div className="custom-number-input h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={decrease}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value={props.product.quantity}
          ></input>
          <button
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={additem}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
}
