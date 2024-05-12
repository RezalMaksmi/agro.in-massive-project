import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo1_white.svg";
import petani from "../../assets/info-img.jpg";
import { BiChat, BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import { TbMessageSearch } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { CardPostDiskusi } from "../../components/atoms";

const ForumDiskusiDetail = () => {
  return (
    <div className="min-h-[120vh] h-auto bg-cover pt-32">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-6 gap-4 h-max mb-12 ">
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
            <CardPostDiskusi />
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

export default ForumDiskusiDetail;
