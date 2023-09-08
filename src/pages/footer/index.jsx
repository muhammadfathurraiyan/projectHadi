import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const index = () => {
  return (
    <footer className="relative text-green-100 top-14 bg-[#055D13] flex flex-col items-center py-16 px-24 max-md:px-12 max-sm:px-8">
      <div className="flex gap-4 text-3xl ">
        <a href="" className="">
          <FaWhatsapp />
        </a>
        <a href="" className="">
          <FaInstagram />
        </a>
        <a href="" className="">
          <FaFacebook />
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
        &copy; Rumoh DM 2023, All rights reserved. Site Designed By:{" "}
        <a
          className="font-bold"
          href="https://muhammadfathurraiyan.site/"
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
