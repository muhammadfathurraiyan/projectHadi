import React from "react";
import Cek from "../../assets/cek.webp"

const index = () => {
  return (
    <section
      id="tentang"
      className="relative bg-green-50 px-24 max-md:px-12 max-sm:px-8 flex flex-col items-center justify-center h-screen"
    >
      <div className="flex justify-around items-center max-md:flex-col max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl text-[#055D13] max-md:text-4xl">
            Manfaatnya apa sih?
          </h1>
          <p className=" mt-2">
            Kami siap memperbaiki pola makan dan mengatur menu diet sehat
            penyandang diabetes untuk mendapatkan kontrol metabolik yang baik.
            Bersama kami, anda dapat mengatur makanan yang seimbang dan sesuai
            dengan kebutuhan kalori dan zat gizi.
          </p>
        </div>
        <div className="max-md:-order-1 max-md:mb-4 w-2/6 max-sm:w-full">
          <img
            className="rounded-xl"
            src={Cek}
            alt="dummyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
