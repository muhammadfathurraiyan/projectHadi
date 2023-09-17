import React from "react";
import { FaCheck } from "react-icons/fa6";
import Food from "../../assets/food1.jpg";

const Card = ({ nama, harga, keterangan, waktu }) => {
  return (
    <div className="bg-white rounded-lg">
      <img className="h-44 w-80 object-cover rounded-t-lg" src={Food} alt="" />
      <div className="px-6 py-6 ">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">{nama}</h3>
          <p className="font-semibold text-[#055D13]">{waktu}</p>
          <p className="font-medium">{harga}</p>
        </div>
        <div>
          <ul>
            {keterangan.map((keterangan) => (
              <li
                id={keterangan}
                className="flex items-center justify-between mb-1"
              >
                {keterangan}
                <span className="text-green-500">
                  <FaCheck />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <a target="_blank" const href={`https://wa.me/6285261811920?text=Saya%20tertarik%20dengan%20layanan%20${nama}`} className="bg-[#055D13] cursor-pointer py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300">
          Pesan
        </a>
      </div>
    </div>
  );
};

export default Card;
