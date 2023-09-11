import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import Logo from "../../assets/logo.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    // Navigasi Bar
    <header className={`${toggle ? "h-full" : 'h-20 bg-green-50'} fixed px-24 max-md:px-12 max-sm:px-8 w-full left-0 top-0 border-b border-b-gray-300 z-10`}>
      <nav className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="w-12">
          <img src={Logo} alt="Logo" />
        </div>
        {/* List Navigasi */}
        <ul
          className={`${
            toggle ? "max-sm:h-full" : "max-sm:h-0"
          } duration-300 ease-in-out flex gap-8 max-sm:absolute max-sm:w-full max-sm:left-0 max-sm:top-0 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:backdrop-blur-md`}
        >
          <li>
            <a
              onClick={toggle ? handleToggle : undefined}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#beranda"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              onClick={toggle ? handleToggle : undefined}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#product"
            >
              Product
            </a>
          </li>
          <li>
            <a
              onClick={toggle ? handleToggle : undefined}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#tentang"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              onClick={toggle ? handleToggle : undefined}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#kontak"
            >
              Kontak
            </a>
          </li>
        </ul>
        {/* Media Socials */}
        <div className="flex gap-3 text-xl z-10">
          <a href="" className="duration-300 hover:text-[#055D13]">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/rumoh_dm/" target="_blank" className="duration-300 hover:text-[#055D13]">
            <FaInstagram />
          </a>
          <a href="http://tiktok.com/@rumohdm" target="_blank" className="duration-300 hover:text-[#055D13]">
            <FaTiktok />
          </a>
        </div>
        {/* Bars Menu, akan muncul pada perangkat mobile */}
        <div
          onClick={handleToggle}
          className="hidden max-sm:block text-xl cursor-pointer z-10"
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
