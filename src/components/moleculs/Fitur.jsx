import React from "react";
import logo1 from "../../assets/logo/Logo1.png";
import bgLogo from "../../assets/logo/bg-logo.svg";

import layanan2 from "../../assets/layanan/layanan2.jpg";
import layanan1 from "../../assets/layanan/layanan1.jpg";
import layanan3 from "../../assets/layanan/layanan3.jpg";
import layanan4 from "../../assets/layanan/layanan4.jpg";
import IcHarga from "../../assets/layanan/icon/hargapangan.svg";
import IcCuaca from "../../assets/layanan/icon/cuaca.svg";
import IcTanah from "../../assets/layanan/icon/tanah.svg";
import IcDiskusi from "../../assets/layanan/icon/diskusi.svg";
import { Link } from "react-router-dom";

const dataFitur = [
  {
    title: "Harga\nPangan",
    icon: IcHarga,
    img: layanan1,
    link: "/harga-pangan",
    description:
      "Menampilkan rata-rata harga pangan indonesia dari berbagai komoditas pertanian yang dapat membantu petani dan masyarakat dalam memperkirakan harga jual dan harga beli.",
  },
  {
    title: "Analisis \n Cuaca",
    icon: IcCuaca,
    img: layanan2,
    link: "/analisis",
    description:
      "Menampilkan prakira cuaca suatu daerah dengan aktual agar petani mampu memprediksi langkah-langkah tepat untuk produk pertaniannya.",
  },
  {
    title: "Analisis \n Tanah",
    icon: IcTanah,
    img: layanan3,
    link: "/analisis",
    description:
      "Menampilkan hasil kecocokan tanaman dengan analisis tanah untuk mempermudah petani memilih tanaman yang cocok ditanam di daerah tertentu. ",
  },
  {
    title: "Forum \n Diskusi",
    icon: IcDiskusi,
    img: layanan4,
    link: "/diskusi",
    description:
      "Menjadi wadah berukar informasi antar petani hingga para ahli dibidang pertanian untuk membagi pengalaman sebutar pertanian sebagai upaya meningkatkan hasil pertanian.",
  },
];
const Fitur = ({ Title }) => {
  return (
    <div
      id="layanan"
      className="h-auto z-10 relative md:px-20 md:pt-36 px-10 py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-semibold">{Title}</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5">
        {dataFitur.map((item, i) => {
          return (
            <Link
              to={item.link}
              className="md:p-4 p-0 md:w-[260px] md:h-[410px] w-full "
              key={i}
            >
              <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative cursor-pointer">
                <img src={item.img} alt="" className="object-contain" />
                <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
                  <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-20 group-hover/item:w-10 transform transition-all duration-500"
                    />
                    <h6 className="text-4xl  font-bold group-hover/item:text-3xl transform transition-all duration-500">
                      {item.title.split("\n").map((line) => (
                        <>
                          {line} <br />
                        </>
                      ))}
                    </h6>
                  </div>
                  <div className="p-3 bg-[#1A3D37] backdrop-blur-md opacity-0 bg-opacity-15 group-hover/item:flex group-hover/item:opacity-100 flex-col transform transition duration-500 w-full text-sm font-normal">
                    <span className="">{item.description}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Fitur;
