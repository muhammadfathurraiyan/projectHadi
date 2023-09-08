import React from "react";
import Card from "./Card";

const index = () => {
  return (
    <section id="product" className="relative -top-1 flex flex-col justify-center items-center bg-[#FFDF96] py-24 px-24 max-md:px-12 max-sm:px-8">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Paket Diet.
        </h1>
        <p className="text-center">
          Rumoh DM menawarkan paket diet DM untuk hidup lebih sehat.
        </p>
      </div>
      <div className="mt-14 flex gap-10 max-md:flex-col max-md:items-center">
        <Card nama="Paket 1" harga="Rp. 175.000" keterangan={["Menu mingguan yang bervarisi"]} />
        <Card nama="Paket 2" harga="Rp. 350.000" keterangan={["Include paket 1", "Kunjungan mingguan kerumah", "Kontrol gula darah"]} />
        <Card nama="Paket 3" harga="Rp. 500.000" keterangan={["Include paket 2", "Konsultasi dengan dokter"]} />  
      </div>
      <div className="absolute left-0 -bottom-20 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20 w-[195vw] bg-[#FFDF96]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-green-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default index;
