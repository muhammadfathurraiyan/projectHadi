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
            className="fill-[#FFDF96]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default index;
