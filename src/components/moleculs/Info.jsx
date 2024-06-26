import React from "react";
import InfoImg from "../../assets/info-img.jpg";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
const Artikel = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto   md:px-20 px-5 pb-36 gap-16 py-24 container mx-auto flex flex-col justify-center items-start  ">
      <div className="grid md:grid-cols-2 gap-6 w-auto mx-auto items-center">
        <div className="max-w-[570px] w-full max-h-[450px] rounded-2xl overflow-hidden ">
          <img src={InfoImg} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col md:gap-6 gap-3">
          <h1 className="md:text-5xl text-2xl font-bold leading-10">
            Tingkatkan Hasil Pertanian
          </h1>
          <span className="md:text-lg text-sm">
            Agro.in menjadi tempat solusi para petani yang menyediakan tempat
            untuk menganalisis tanah, pemetaan cuaca, dan forum diskusi sesama
            petani yang akan membantu petani meningkatkan hasil pertanian.
          </span>
          <Button
            onClick={() => navigate("/login")}
            type="LongPrimaryButtonIconRow"
            text="Bergabung Dengan Kami"
          />
        </div>
      </div>
    </div>
  );
};

export default Artikel;
