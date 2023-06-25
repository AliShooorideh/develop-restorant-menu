import Image from "next/image";
interface IProduct {
  src: string;
  title: string;
  price: number;
  type: number;
}
export default function FoodBox(item: IProduct) {
  return (
    <>
      {item.type === 1 && (
        <div className="flex flex-col items-start justify-center space-y-1">
          <Image
            className="mb-3 h-24 w-full rounded-3xl object-cover"
            src={item.src}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <span className="text-sm font-bold text-white">{item.title}</span>
          <span className="text-white">${item.price}</span>
          <button className="rounded-full bg-[#ff4f4f] px-3 py-[3px] text-xs text-white">
            Add Cart
          </button>
        </div>
      )}
      {item.type === 2 && (
        <div className="flex justify-between space-x-5 border-b border-white pb-5">
          <Image
            className="mb-3 h-24 w-24 rounded-3xl object-cover"
            src={item.src}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <div className="space-y-1">
            <span className="text-sm font-bold text-white">{item.title}</span>
            <p className="text-sm text-white opacity-40">
              Lorem ipsum dolor Lorem ipsum dolor, sit amet
              consectetur ,
            </p>
            <div className="flex justify-between">
              <span className="text-white">${item.price}</span>
              <button className="rounded-full bg-[#ff4f4f] px-3 py-[3px] text-xs text-white">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
