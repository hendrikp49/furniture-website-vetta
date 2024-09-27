import { Rating, RatingStar } from "flowbite-react";

export default function Product(props) {
  const { produk, arrow } = props;
  return (
    <section className="py-16 bg-slate-100">
      <div className="container flex flex-col items-center gap-10 mx-auto ">
        <h2 className="text-2xl font-bold text-center lg:text-3xl">
          Best Selling Product
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {produk.map((item) => (
            <div
              key={item.nama}
              className="flex flex-col max-w-xs px-2 transition-all duration-500 ease-in-out rounded-md hover:cursor-pointer hover:border hover:border-pink-400 md:w-auto md:max-w-lg"
            >
              <img
                className="object-contain h-72 drop-shadow-xl"
                src={item.gambar}
                alt={item.alt}
              />
              <div className="mt-5">
                <h6 className="text-sm text-slate-400">{item.jenis}</h6>
                <h4 className="text-lg font-bold">{item.nama}</h4>
                <Rating>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <div className="flex items-center justify-between py-3 mt-3">
                <p className="text-xl font-bold">
                  {item.harga}
                  <span className="text-sm font-normal">.000</span>
                </p>
                <button className="p-3 transition-all duration-700 ease-out rounded-full hover:rotate-90 bg-slate-200 hover:bg-black hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="text-orange-400 hover:text-orange-600">
          View All Furniture
          {arrow}
        </a>
      </div>
    </section>
  );
}
