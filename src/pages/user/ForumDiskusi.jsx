import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo1_white.svg";
import petani from "../../assets/info-img.jpg";
import {
  BiChat,
  BiCommentDetail,
  BiHomeAlt,
  BiSearchAlt,
} from "react-icons/bi";
import { TbMessageSearch } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { CommentDiskusi } from "../../components/moleculs";
import { FormDiskusi } from "../../components/atoms";

const ForumDiskusi = () => {
  const [showTable, setShowTable] = React.useState(10);
  const [selectedMenu, setSelectedMenu] = useState("pertanyaan");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    if (menu === "pertanyaan") {
      setSelectedMenu("pertanyaan");
    } else {
      setSelectedMenu("buat-informasi");
    }
  };

  return (
    <div className="min-h-[120vh] h-auto bg-cover pt-32">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-6 gap-4 h-max mb-12">
          <div className="bg-primary rounded-2xl shadow-md h-max  sticky top-32">
            <div className="flex flex-col gap-0 items-center ">
              <div className="flex flex-col justify-center items-center my-3">
                <img src={logo} alt="" className="w-20" />
                <div className="text-white font-bold text-xl">Forum</div>
              </div>
              <ul className="w-full bg-white">
                <li className="p-1">
                  <Link
                    to="beranda"
                    className=" flex w-full py-2 px-3 items-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                  >
                    <BiHomeAlt />
                    Beranda
                  </Link>
                </li>
                <li className="p-1">
                  <Link
                    to="cari"
                    className=" flex w-full py-2 px-3 items-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                  >
                    <BiSearchAlt />
                    Cari
                  </Link>
                </li>
                <li className="p-1">
                  <Link
                    to="beranda"
                    className=" flex w-full py-2 px-3 items-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                  >
                    <TbMessageSearch />
                    Jelajah Ruang
                  </Link>
                </li>
                <li className="p-1">
                  <Link
                    to="beranda"
                    className=" flex w-full py-2 px-3 items-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                  >
                    <BiChat />
                    Ruang
                  </Link>
                </li>
              </ul>
              <Link
                to="beranda"
                className=" flex w-full py-3 px-3 font-semibold text-white items-center gap-3"
              >
                <FaPlusCircle />
                Buat Ruang
              </Link>
            </div>
          </div>
          <div className=" col-span-3 h-auto">
            <div className="flex flex-col w-full gap-6">
              <div className="rounded-xl bg-primary flex flex-col gap-5 py-6 px-4">
                {/* Profil */}
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
                    alt=""
                    className="w-10 h-10 bg-pink-600 rounded-full object-cover "
                  />
                  <div className="flex flex-col  text-white">
                    <h1 className="text-xl font-bold">Mulyadi</h1>
                    <span className="text-base">
                      Petani - Jawa Tengah, Indonesia
                    </span>
                  </div>
                </div>
                {/* pertanyaan */}
                <div className="w-full border-2 border-dark_10 rounded-full p-1 grid grid-cols-2">
                  <button
                    onClick={() => handleMenuClick("pertanyaan")}
                    className={` ${
                      selectedMenu === "pertanyaan"
                        ? "bg-secondary text-primary"
                        : "  text-white scale-95"
                    } rounded-full py-2 text-center font-semibold  text-lg transform transition-all duration-300`}
                  >
                    Pertanyaan
                  </button>
                  <button
                    onClick={() => handleMenuClick("buat-informasi")}
                    className={` ${
                      selectedMenu === "buat-informasi"
                        ? "bg-secondary text-primary"
                        : "  text-white scale-95"
                    } rounded-full py-2 text-center font-semibold  text-lg transform transition-all duration-300`}
                  >
                    Buat Informasi
                  </button>
                </div>
                {/* form */}

                <FormDiskusi type={selectedMenu} />
                {/*  */}
              </div>

              <div className="">
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
                      <span className="text-base">
                        Petani - Jawa Tengah, Indonesia
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-bold">
                      Bagaimana cara supaya petani indonesia bisa maju?
                    </h1>
                    <div className="text-base">
                      Hasil ngobrol sama petani di beberapa daerah : <br />
                      1. Harga komoditas pertanian merupakan kunci kesejahteraan
                      dan insentif utama bagi petani. Kalau harga produk
                      pertanian selalu dipaksa harus murah, kapan petani mau
                      sejahtera?
                    </div>
                    <img
                      src={petani}
                      alt=""
                      className="object-cover w-full rounded-md"
                    />
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
            </div>
          </div>
          <div className="bg-netral_10 col-span-2 shadow-md h-max  sticky top-32 ">
            <div className="flex py-3 flex-col justify-center items-center">
              <span>Spase Iklan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiskusi;
