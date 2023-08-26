import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    // Navigasi Bar
    <header className={`${toggle ? "h-full" : 'h-20 bg-white'} fixed w-full top-0 border-b border-b-gray-300 `}>
      <nav className="flex items-center justify-between h-20 mx-24 max-md:mx-12 max-sm:mx-8">
        {/* Logo */}
        <h1 className="font-bold text-xl z-10">Logo.</h1>
        {/* List Navigasi */}
        <ul
          className={`${
            toggle ? "max-sm:h-full" : "max-sm:h-0"
          } duration-300 ease-in-out flex gap-8 max-sm:absolute max-sm:w-full max-sm:left-0 max-sm:top-0 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:backdrop-blur-md`}
        >
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#beranda"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#product"
            >
              Product
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#tentang"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#berlangganan"
            >
              Berlangganan
            </a>
          </li>
        </ul>
        {/* Media Socials */}
        <div className="flex gap-3 text-xl z-10">
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
