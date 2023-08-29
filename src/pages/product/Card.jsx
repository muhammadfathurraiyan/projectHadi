import React from "react";
import { FaCheck } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="w-80 bg-white rounded-lg">
      <img
        className="h-44 w-80 object-cover rounded-t-lg"
        src="https://picsum.photos/seed/fruit/300"
        alt=""
      />
      <div className="px-6 py-6">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Lorem 1</h3>
          <p className="font-medium">Rp.12.000</p>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-between mb-1">
              Lorem, ipsum dolor. <span className="text-green-500"><FaCheck /></span>
            </li>
            <li className="flex items-center justify-between mb-1">
              Lorem, ipsum dolor. <span className="text-green-500"><FaCheck /></span>
            </li>
            <li className="flex items-center justify-between mb-1">
              Lorem, ipsum dolor. <span className="text-green-500"><FaCheck /></span>
            </li>
          </ul>
        </div>
        <a className="bg-green-500 py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300">
          Button
        </a>
      </div>
    </div>
  );
};

export default Card;
