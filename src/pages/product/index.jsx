import React from "react";
import Card from "./Card";

const index = () => {
  return (
    <section id="product" className="relative -top-1 flex flex-col justify-center items-center bg-green-500 py-24 px-24 max-md:px-12 max-sm:px-8">
      <div>
        <h1 className="uppercase text-2xl font-semibold text-white text-center">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequuntur laudantium velit quisquam cupiditate voluptatem.
        </p>
      </div>
      <div className="mt-14 flex gap-10 max-md:flex-col max-md:items-center">
        <Card />
        <Card />
        <Card />  
      </div>
      <div className="absolute left-0 -bottom-20 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20 w-[195vw] bg-green-500"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-green-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default index;
