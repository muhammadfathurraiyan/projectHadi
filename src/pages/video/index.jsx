import React from "react";
import KonsepDM from "../../assets/konsep_DM.mp4";
import latihan from "../../assets/latihan_jasmani&perawatan_kaki.mp4";
import pemantauan from "../../assets/pemantauan_gula_darah.mp4";
import diet from "../../assets/pengelolaan_diet_dm.mp4";
import obat from "../../assets/penggunaan_obat_dm.mp4";

const data = [
  {
    id: 1,
    title: "Konsep Diabetes Melitus.",
    src: KonsepDM,
  },
  {
    id: 2,
    title: "Latihan Jasmani dan Perawatan Kaki.",
    src: latihan,
  },
  {
    id: 3,
    title: "Pemantauan Gula Darah.",
    src: pemantauan,
  },
  {
    id: 4,
    title: "Pengelolaan Diet Diabetes Melitus.",
    src: diet,
  },
  {
    id: 5,
    title: "Penggunaan Obat Diabetes Melitus.",
    src: obat,
  },
];

export default function index() {
  return (
    <section
      id="video"
      className="relative bg- top-10 px-24 py-24 max-md:px-12 max-sm:px-8"
    >
      <div className="flex flex-col justify-around items-center max-md:flex-col max-md:justify-center">
        <h1 className="text-center text-4xl font-bold">Galeri Rumoh DM</h1>
        <p className="text-center">Galeri informasi video dari Rumoh DM</p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
          {data.map((data) => (
            <div key={data.id} className="rounded-b border border-gray-300">
              <video className="rounded-t" controls>
                <source src={`${data.src}#t=2`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="p-4 font-bold text-lg">{data.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
