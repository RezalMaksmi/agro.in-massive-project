import React from "react";
import InfoImg from "../../assets/info-img.jpg";
import { IoArrowForward } from "react-icons/io5";
const Artikel = () => {
  return (
    <div className="h-auto   md:px-20 px-10 pb-36 gap-16 py-24 container mx-auto flex flex-col justify-center items-start  ">
      <div className="grid md:grid-cols-2 gap-6 w-auto mx-auto items-center">
        <div className="max-w-[570px] w-full max-h-[450px] rounded-2xl overflow-hidden ">
          <img src={InfoImg} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Tingkatkan Hasil Pertanian</h1>
          <span>
            Agro.in menjadi tempat solusi para petani yang menyediakan tempat
            untuk menganalisis tanah, pemetaan cuaca, dan forum diskusi sesama
            petani yang akan membantu petani meningkatkan hasil pertanian.
          </span>
          <a
            href=""
            className="py-2 px-4 bg-[#FAB737] rounded-full w-max flex flex-row justify-center items-center gap-3"
          >
            Bergabung dengan kami <IoArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
