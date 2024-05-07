import React from "react";
import artikel from "../../assets/artikel.jpg";
const Artikel = () => {
  return (
    <div className="h-auto  px-20 pb-36 gap-16 py-24 container mx-auto flex flex-col justify-center items-start bg-[#1A3D37] ">
      <div className="text-white gap-2">
        <h1 className="text-5xl font-bold">Artikel</h1>
        <span>Kumpulan berita terbaru di sekitar Pertanian</span>
      </div>
      <div className="grid grid-cols-3 gap-6 w-auto mx-auto">
        <div className=" flex flex-col rounded-lg bg-[#fff] overflow-hidden">
          <div className="h-[70px] w-full overflow-hidden">
            <img src={artikel} alt="" className="object-cover w-full" />
          </div>
          <div className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-2xl font-bold">
              Pemerintah Aceh Gelara Kembali Pasar Tani di 2024
            </h1>
            <span className="">
              Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan Aceh
              kembali menggelar pasar tani pada tahun ini. Ratusan masyarakat
              antusias menyerbu
            </span>
            <a href="" className="py-4 text-end">
              Read More
            </a>
          </div>
        </div>

        <div className=" flex flex-col rounded-lg bg-[#fff] overflow-hidden">
          <div className="h-[70px] w-full overflow-hidden">
            <img src={artikel} alt="" className="object-cover w-full" />
          </div>
          <div className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-2xl font-bold">
              Suhu Udara Tinggi, Kegiatan Pertanian Turun
            </h1>
            <span className="">
              Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan Aceh
              kembali menggelar pasar tani pada tahun ini. Ratusan masyarakat
              antusias menyerbu
            </span>
            <a href="" className="py-4 text-end">
              Read More
            </a>
          </div>
        </div>

        <div className=" flex flex-col rounded-lg bg-[#fff] overflow-hidden">
          <div className="h-[70px] w-full overflow-hidden">
            <img src={artikel} alt="" className="object-cover w-full" />
          </div>
          <div className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-2xl font-bold">
              Apakah Makan Organik Benar-benar Sehat?
            </h1>
            <span className="">
              Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan Aceh
              kembali menggelar pasar tani pada tahun ini. Ratusan masyarakat
              antusias menyerbu
            </span>
            <a href="" className="py-4 text-end">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
