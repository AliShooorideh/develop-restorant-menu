import FoodBox from "@/components/FoodBox";
import { useState } from "react";

export default function Products() {
  const [searchValue, setSearchValue] = useState<string>();
  return (
    <div className="px-6">
      <div className="relative z-40 mt-5 flex items-center justify-between ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className=" mt-8 flex items-center justify-between">
        <div className="relative w-2/3">
          <input
            className=" w-full rounded-full py-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="absolute right-2 top-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="h-8 w-8 rounded-lg border border-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
      <div className="mt-10 space-y-5">
        <FoodBox
          type={2}
          price={300}
          title="Food Name"
          src={"/images/001.jpg"}
        />
        <FoodBox
          type={2}
          price={300}
          title="Food Name"
          src={"/images/002.jpg"}
        />
        <FoodBox
          type={2}
          price={300}
          title="Food Name"
          src={"/images/003.jpg"}
        />
        <FoodBox
          type={2}
          price={300}
          title="Food Name"
          src={"/images/001.jpg"}
        />
        <FoodBox
          type={2}
          price={300}
          title="Food Name"
          src={"/images/002.jpg"}
        />
      </div>
    </div>
  );
}
