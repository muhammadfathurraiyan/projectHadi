import React from "react";
import hadi from "../../assets/hadi.jpg";
import riyan from "../../assets/riyan.jpg";
import ali from "../../assets/ali.jpg";
import molina from "../../assets/molina.jpg";
import rizky from "../../assets/rizky.jpg";
import alifah from "../../assets/alifah.jpg";

const data = [
  {
    id: 1,
    name: "Ns. Riyan Mulfianda, M.Kep",
    src: riyan,
    role: "Pembina",
  },
  {
    id: 4,
    name: "Maulina Putri",
    src: molina,
    role: "Ketua",
  },
  {
    id: 2,
    name: "Muhammad Hadi Akbar",
    src: hadi,
    role: "Kreatif",
  },
  {
    id: 5,
    name: "Alifah Maisuni",
    src: alifah,
    role: "Keuangan",
  },
  {
    id: 3,
    name: "M. Al Iqbal",
    src: ali,
    role: "Produksi",
  },
  {
    id: 6,
    name: "Rizky Utami",
    src: rizky,
    role: "Pemasaran",
  },
];

export default function index() {
  return (
    <section
      id="video"
      className="relative bg- top-10 px-24 py-24 max-md:px-12 max-sm:px-8"
    >
      <div className="flex flex-col justify-around items-center max-md:flex-col max-md:justify-center">
        <h1 className="text-center text-4xl font-bold">Tim Rumoh DM</h1>
        <p className="text-center">Mengenal tim dari Rumoh DM</p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
          {data.map((data) => (
            <div key={data.id} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={data.src}
                  alt={data.name}
                  className={`w-full h-full object-cover object-top ${
                    data.id === 1 && "object-bottom"
                  }`}
                />
              </div>
              <div className="p-4 flex items-center flex-col ">
                <h2 className="font-bold text-lg text-center">{data.name}</h2>
                <p>{data.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
