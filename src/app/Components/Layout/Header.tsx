"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

import Dropdown from "../Shares/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const variants = {
  true: { opacity: 1, x: 0 },
  false: { opacity: 0, x: "-100%" },
};

function Header() {
  const [navbar, setNavbar] = useState(false);
  const counterValue = useSelector(
    (state: RootState) => state.counterSlice.totalQuantity
  );
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="flex  justify-between px-4 mx-20 my-8 lg:max-w-7lg lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between   lg:block">
              {/* LOGO */}
              <a className=" flex">
                <Image
                  src="/logo.svg"
                  alt={"logo"}
                  height={60}
                  width={60}
                  className=""
                />
              </a>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  lg:block   
              ${navbar ? "p-12 lg:p-0 block" : "hidden"}`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center text-black lg:flex ">
                <li className=" text-lg font-lg  py-2  lg:px-6 text-center border-b-2 lg:border-b-0   border-black lg:hover:text-orange-600 lg:hover:bg-transparent">
                  <Link onClick={() => setNavbar(!navbar)} href={""}>
                    Home
                  </Link>
                </li>
                <li className=" text-lg font-lg  py-2 px-6 text-center  border-b-2 lg:border-b-0   border-black lg:hover:text-orange-600 lg:hover:bg-transparent">
                  <Link onClick={() => setNavbar(!navbar)} href={""}>
                    About
                  </Link>
                </li>
                <li className="flex items-center space-x-2 text-lg font-lg  py-2 px-6 text-center  border-b-2 lg:border-b-0   lg:hover:bg-transparent">
                  <Link
                    onClick={() => setNavbar(!navbar)}
                    href={"/category/bnpm"}
                  >
                    Categories
                  </Link>
                </li>
                <li className=" text-lg font-lg  py-2 px-6 text-center  border-b-2 lg:border-b-0   border-black lg:hover:text-orange-600 lg:hover:bg-transparent">
                  <Link onClick={() => setNavbar(!navbar)} href={""}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  justify-end space-x-2 text-xs  ">
            <Link href={"/cart"}>
              <div
                className={` bg-white  flex relative     py-2 px-4 cursorPointer `}
              >
                <FaShoppingCart size={30} height={30} />
                <span className="text-white bg-red-900 rounded-lg px-2 absolute ml-6">
                  {counterValue}
                </span>
              </div>
            </Link>
            <div></div> {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <div
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineCloseCircle size={30} />
                ) : (
                  <BiMenuAltRight size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
