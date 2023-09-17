import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ nama, no, foto, closeModal }) => {
  return (
    <div className="w-full h-full fixed z-20 top-0 left-0 flex items-center justify-center bg-black/70">
      <div className="max-sm:w-full max-sm:px-4">
        <div
          key={no}
          className="bg-white relative rounded-lg py-14 px-8 max-sm:px-4 flex gap-4 items-center justify-center"
        >
          <div
            onClick={closeModal}
            className="cursor-pointer absolute top-4 right-4"
          >
            <FaTimes />
          </div>
          <div className="w-28 h-28">
            <img
              className="object-cover object-top max-h-full min-w-full rounded-full"
              src={foto}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold w-60">{nama}</h3>
            <p className="font-semibold text-[#055D13]">{no}</p>
            <p className="font-medium"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
