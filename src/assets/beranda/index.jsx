import React from "react";

const Beranda = () => {
  return (
    <section className="mt-20 mx-24 max-md:mt-36 max-md:mx-12 max-sm:mx-8">
      <div className="h-[80vh] flex justify-around items-center max-md:h-[70vh] max-md:flex-col max-md max-md:items-start max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl max-md:text-4xl uppercase">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="font-medium mt-2">
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
        <div className="max-md:-order-1 max-md:mb-4 ">
          <img
            className="rounded-xl max-md:w-60"
            src="https://picsum.photos/300"
            alt="dummyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Beranda;
