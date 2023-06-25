import FoodBox from "@/components/FoodBox";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Product() {
  const router = useRouter();
  return (
    <>
      <Image
        className="absolute inset-x-0 top-0 z-0 w-screen rounded-b-[50px] opacity-60"
        src={"/images/004.jpg"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div>
        <div className="relative z-40 mt-5 flex items-center justify-between px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
            onClick={() => router.back()}
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
        <div className="relative mt-36 flex flex-col items-center text-3xl font-bold text-white">
          <span>Diffrent</span>
          <span>Kind of Food</span>
        </div>
        <div className="mt-20 flex px-6 text-xl font-bold text-white">
          <span className="mr-5 whitespace-nowrap">Food Category</span>
          <div className="w-full border-b-2 border-white" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 px-6">
          <FoodBox
            src={"/images/001.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
          <FoodBox
            src={"/images/002.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
          <FoodBox
            src={"/images/003.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
        </div>
        <div className="mt-5  flex px-6 text-xl font-bold text-white">
          <span className="mr-5 whitespace-nowrap">Food Category</span>
          <div className="w-full border-b-2 border-white" />
        </div>
        <div className="mt-10 pb-20 grid grid-cols-3 gap-4 px-6">
          <FoodBox
            src={"/images/001.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
          <FoodBox
            src={"/images/002.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
          <FoodBox
            src={"/images/003.jpg"}
            title="Food Name"
            price={300}
            type={1}
          />
        </div>
      </div>
    </>
  );
}
