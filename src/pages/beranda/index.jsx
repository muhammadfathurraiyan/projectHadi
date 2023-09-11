import React from "react";
import NamaLogo from "../../assets/namalogo.png";
import Food from "../../assets/food.jpg";

const Beranda = () => {
  return (
    <section
      id="beranda"
      style={{ backgroundImage: `url(${Food})` }}
      className="relative flex items-center h-screen max-md:h-[120vh] bg-fixed bg-center bg-no-repeat bg-cover w-full"
    >
      <div className="flex justify-normal px-24 max-md:px-12 max-sm:px-8 h-full items-center max-md:flex-col max-md:items-start max-md:justify-center p-12 bg-black/50 rounded-lg w-[65%] max-md:w-full">
        <div className="">
          <img className="" src={NamaLogo} alt="Brand" />
          <p className="text-white/80 mt-2">
            Rumoh DM menawarkan jasa serta konsultasi beragam pilihan variasi menu diet sehat yang spesial dirancang bagi penderita DM.
          </p>
          <a
            href="#product"
            className="bg-[#055D13] cursor-pointer py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300"
          >
            Paket Diet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
