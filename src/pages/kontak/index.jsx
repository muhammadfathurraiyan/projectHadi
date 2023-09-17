import React from "react";
import {
  FaInstagram,
  FaLocationArrow,
  FaLocationDot,
  FaMap,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import Rumkit from "../../assets/rumkit.jpg"

const index = () => {
  return (
    <section
      id="kontak"
      style={{ backgroundImage: `url(${Rumkit})` }}
      className="relative bg-green-50 top-14 flex flex-col items-center justify-center h-screen bg-fixed bg-bottom bg-no-repeat bg-cover w-full"
    >
      <div className="flex justify-around w-full h-full bg-black/80 px-24 max-md:px-12 max-sm:px-8 items-center max-md:flex-col max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-white/80 text-5xl  max-md:text-4xl">Hubungi kami.</h1>
          <p className=" text-lg text-white/80 font-medium mt-2">Social Media : </p>
          <div className="text-white/80">
            <div className="flex gap-1 items-center">
              <FaInstagram /> @rumoh_dm
            </div>
            <div className="flex gap-1 items-center">
              <FaWhatsapp /> +6285261811920
            </div>
            <div className="flex gap-1 items-center">
              <FaTiktok /> @rumoh_dm
            </div>
            <p className=" text-lg font-medium mt-2">Alamat :</p>
            <div className="flex gap-1 items-center">
              <FaLocationDot /> Krueng Barona Jaya.
            </div>
          </div>
        </div>
        <div className="mt-4 -order-1 max-sm:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075411.350723844!2d94.00558228943179!3d4.0420694498956085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30399bdf507cc4bd%3A0x1039d80b220ca60!2sAceh!5e0!3m2!1sid!2sid!4v1693405078653!5m2!1sid!2sid"
            width="300"
            height="300"
            className="border-none rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default index;
