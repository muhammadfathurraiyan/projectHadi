import React from "react";
import { FaCheck } from "react-icons/fa6";
import Food from "../../assets/food1.jpg";

const Card = ({ nama, harga, keterangan }) => {
  return (
    <div className="bg-white rounded-lg">
      <img className="h-44 w-80 object-cover rounded-t-lg" src={Food} alt="" />
      <div className="px-6 py-6 ">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">{nama}</h3>
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
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfKEdx2Y255ICoSwD9b2KqD8-ifcbubpq--7ijuNHyFyMEvoQ/viewform?usp=sf_link " className="bg-[#055D13] cursor-pointer py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300">
          Pesan
        </a>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import Food from "../../assets/food.jpg"

// const Card = ({ nama, harga }) => {
//   return (
//     <div className="bg-white rounded-lg">
//       <img
//         className="h-44 w-80 object-cover rounded-t-lg"
//         src={Food}
//         alt=""
//       />
//       <div className="px-6 py-6">
//         <div className="mb-4">
//           <h3 className="font-semibold text-lg">{nama}</h3>
//           <p className="font-medium">{harga}</p>
//         </div>
//         <div>
//           <p>{}</p>
//         </div>
//         <a className="bg-[#055D13] cursor-pointer py-3 px-4 inline-block mt-4 rounded-md text-white hover:bg-green-700 duration-300">
//           Button
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;
