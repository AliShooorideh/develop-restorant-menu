import Image from "next/image";
import {useRouter} from "next/router"
export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center px-6">
      <div className=" mt-12 mb-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-3xl font-bold text-[#ff4f4f]">
        <span>LO</span>
        <span>GO</span>
      </div>
      <span className="text-3xl font-bold text-white">FOOD BANK</span>
      <span className="text-sm text-white">Spacial & Delicious Food</span>
      <button onClick={() => router.push("/product")} className="mt-36 rounded-full bg-[#ff4f4f] px-16 py-3 text-xl font-bold text-white">
        Log In
      </button>
      <button className="mt-7 rounded-full bg-white px-14 py-3 text-xl font-bold">
        Sign Up
      </button>
      <div className="relative mt-32">
        <Image
          className="w-screen "
          src={"/images/000.png"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="absolute z-30 left-5 text-white top-7 flex flex-col text-3xl">
          <span className="font-bold text-4xl">15%</span>
          <span className="font-bold">Discount</span>
          <span className="text-xl">From Our Store</span>
        </div>
      </div>
    </div>
  );
}
