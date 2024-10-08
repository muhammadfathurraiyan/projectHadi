import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const index = () => {
  return (
    <footer className="relative text-green-100 top-14 bg-[#055D13] flex flex-col items-center py-16 px-24 max-md:px-12 max-sm:px-8">
      <div className="flex gap-4 text-3xl ">
        <a href="https://wa.me/+6285261811920/" target="_blank" className="">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/rumoh_dm/"
          target="_blank"
          className=""
        >
          <FaInstagram />
        </a>
        <a href="http://tiktok.com/@rumohdm" target="_blank" className="">
          <FaTiktok />
        </a>
      </div>
      <ul className="py-4 flex gap-8 max-md:gap-6 max-sm:gap-4">
        <li>
          <a href="#beranda">Beranda</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#tentang">Tentang</a>
        </li>
        <li>
          <a href="#berlangganan">Berlangganan</a>
        </li>
      </ul>
      <p className="text-sm font-medium text-center">
        &copy; 2023-2024 Rumoh DM, All rights reserved. Site Designed By:{" "}
        <a
          className="font-bold hover:text-green-500 duration-300"
          href="https://muhammadfathurraiyan.vercel.app/"
          target="_blank"
        >
          Raiyan
        </a>
        .
      </p>
    </footer>
  );
};

export default index;
