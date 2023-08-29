import React from "react";

const Beranda = () => {
  return (
    <section id="beranda" className="relative px-24 max-md:px-12 max-sm:px-8 flex items-center justify-center h-screen max-md:h-[120vh]">
      <div className="flex justify-around items-center max-md:flex-col max-md:items-start max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl max-md:text-4xl uppercase">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="c mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            et suscipit. Corrupti soluta ab labore tempora illum eum iure
            cupiditate?
          </p>
          <a
            href="#product"
            className="bg-green-500 py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300"
          >
            Button
          </a>
        </div>
        <div className="max-md:-order-1 max-md:mb-4">
          <img
            className="rounded-xl"
            src="https://picsum.photos/300"
            alt="dummyImage"
          />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20  w-[195vw]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-green-500"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Beranda;
