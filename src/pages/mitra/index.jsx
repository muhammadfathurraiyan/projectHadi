import React from "react";
import Foto1 from "../../assets/foto1.jpg";
import Foto2 from "../../assets/foto2.jpg";
import Foto3 from "../../assets/foto3.jpg";

const index = () => {
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
          <div className="w-2/6 max-sm:w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-32 h-32">
              <img
                className="rounded-full object-cover object-top max-h-full min-w-full"
                src={Foto1}
              />
            </div>
            <p className="font-medium text-center">dr. Husnu Gunari, MKM</p>
          </div>
          <div className="w-2/6 max-sm:w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-32 h-32">
              <img
                className="rounded-full object-cover object-bottom max-h-full min-w-full"
                src={Foto2}
              />
            </div>
            <p className="font-medium text-center">Ns. Mirza, S.Kep., CWCCA, CSN</p>
          </div>
          <div className="w-2/6 max-sm:w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-32 h-32">
              <img
                className="rounded-full object-cover object-top max-h-full min-w-full"
                src={Foto3}
              />
            </div>
            <p className="font-medium text-center">Ns. Yadi Putra, M.Kep., CWCCA, CSCM, CH, CHT, CCHT, CI, CP.NLP, CTMFH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
