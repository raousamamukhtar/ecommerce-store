import Wrapper from "@/app/Components/Shares/Wrapper";
import ProductCardGrid from "@/app/Components/Widgets/ProductCardGrid";

export default function page() {
  return (
    <div className="w-full py-14 relative mt-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>

        {/* products grid start */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0"> */}
        <ProductCardGrid />
        {/* </div> */}
        {/* products grid end */}

        {/* PAGINATION BUTTONS START */}
        {/* <div className="flex gap-3 items-center justify-center my-16 md:my-0">
          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
          >
            Previous
          </button>

          <span className="font-bold"></span>

          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
          >
            Next
          </button>
        </div> */}
        {/* PAGINATION BUTTONS END */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
          <img src="/logo.svg" width={150} />
          <span className="text-2xl font-medium">Loading...</span>
        </div> */}
      </Wrapper>
    </div>
  );
}
