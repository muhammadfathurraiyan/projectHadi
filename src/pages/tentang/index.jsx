import React from "react";
import Logo from "../../assets/logo.png"

const index = () => {
  return (
    <section
      id="tentang"
      className="relative bg-green-50 px-24 max-md:px-12 max-sm:px-8 flex flex-col items-center justify-center h-screen"
    >
      <div className="flex justify-around items-center max-md:flex-col max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl text-[#055D13] max-md:text-4xl">
            Apa sih Rumoh DM?
          </h1>
          <p className=" mt-2">
            Rumoh DM merupakan program berbasis digital yang menawarkan dan
            memberikan jasa menu diet diabetes dengan pendekatan "3-J" (Jadwal,
            Jenis, & Jumlah). Rumoh DM menyediakan berbagai varian diet sehat
            yang dapat meningkatkan kontrol metabolik dan kualitas hidup
            peyandang diabetes
          </p>
        </div>
        <div className="-order-1 max-md:mb-4 w-1/4 max-sm:w-1/2">
          <img
            className="rounded-xl"
            src={Logo}
            alt="dummyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
