import React from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { CommentDiskusi } from "../moleculs";
import petani from "../../assets/info-img.jpg";

const CardPostDiskusi = () => {
  return (
    <div>
      <div className="rounded-xl bg-netral_10 flex flex-col gap-5 py-6 px-4">
        {/* Profil */}
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
            alt=""
            className="w-10 h-10 bg-pink-600 rounded-full object-cover "
          />
          <div className="flex flex-col  text-black">
            <h1 className="text-xl font-bold">Mulyadi</h1>
            <span className="text-base">Petani - Jawa Tengah, Indonesia</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            Bagaimana cara supaya petani indonesia bisa maju?
          </h1>
          <div className="text-base">
            Hasil ngobrol sama petani di beberapa daerah : <br />
            1. Harga komoditas pertanian merupakan kunci kesejahteraan dan
            insentif utama bagi petani. Kalau harga produk pertanian selalu
            dipaksa harus murah, kapan petani mau sejahtera?
          </div>
          <img src={petani} alt="" className="object-cover w-full rounded-md" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-2 items-center text-dark_30 border-2 border-dark_20 px-2 rounded-full text-lg">
            <AiFillUpCircle className="text-xl" />
            <span>3455</span>
            <AiFillDownCircle className="text-xl" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <BiCommentDetail />
            <span className="">100k</span>
          </div>
        </div>
      </div>
      <CommentDiskusi />
    </div>
  );
};

export default CardPostDiskusi;
