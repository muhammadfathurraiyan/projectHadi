import React, { useState } from "react";
import Foto1 from "../../assets/foto1.jpg";
import Foto2 from "../../assets/foto2.jpg";
import Foto3 from "../../assets/foto3.jpg";
import Modal from "./Modal";

const index = () => {
  const datas = [
    {
      nama: "dr. Husnu Gunari, MKM",
      foto: Foto1,
      no: "+62",
    },
    {
      nama: "Ns. Mirza, S.Kep., CWCCA, CSN",
      foto: Foto2,
      no: "+62",
    },
    {
      nama: "Ns. Yadi Putra, M.Kep., CWCCA, CSCM, CH, CHT, CCHT, CI, CP.NLP, CTMFH",
      foto: Foto3,
      no: "+62",
    },
  ];

  const [selectedExpert, setSelectedExpert] = useState(null);

  const openModal = (expert) => {
    setSelectedExpert(expert);
  };

  const closeModal = () => {
    setSelectedExpert(null);
  };

  return (
    <section
      id="alamat"
      className="relative bg- top-10 px-24 py-24 max-md:px-12 max-sm:px-8"
    >
      <div className="flex flex-col justify-around items-center max-md:flex-col max-md:justify-center">
        <h1 className="text-center text-4xl font-bold">Mitra Rumoh DM</h1>
        <p className="text-center">
          Kami bekerjasama dengan beberapa para ahli:
        </p>
        <div className="flex mt-8 items-baseline justify-evenly w-3/4 max-sm:flex-wrap gap-y-8">
          {datas.map((data) => (
            <div
              key={data.no}
              className="w-2/6 max-sm:w-full flex flex-col gap-4 justify-center items-center"
            >
              <div className="w-32 h-32">
                <img
                  className="rounded-full object-cover object-top max-h-full min-w-full"
                  src={data.foto}
                />
              </div>
              <p
                onClick={() => openModal(data)}
                className="cursor-pointer font-medium text-center"
              >
                {data.nama}
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedExpert && (
        <Modal
          nama={selectedExpert.nama}
          foto={selectedExpert.foto}
          no={selectedExpert.no}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default index;
