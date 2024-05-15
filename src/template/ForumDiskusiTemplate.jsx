import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import bgLogo from "../assets/logo/bg-logo.svg";

import { Link } from "react-router-dom";
import { BiChat, BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import logo from "../assets/logo/Logo1_white.svg";
import { TbMessageSearch } from "react-icons/tb";

const ForumDiskusiTemplate = ({ children }) => {
  return (
    <div>
      <div
        className="min-h-[120vh] h-auto pt-32 bg-no-repeat  bg-right-top "
        style={{ backgroundImage: `URL(${bgLogo})` }}
      >
        <div className="container mx-auto md:px-10 px-3">
          <div className="grid grid-cols-6 md:gap-4 gap-2 h-max mb-12 ">
            <div className="bg-primary rounded-2xl shadow-md h-max  sticky top-32">
              <div className="flex flex-col gap-0 items-center ">
                <div className="flex flex-col justify-center items-center my-3">
                  <img src={logo} alt="" className="md:w-20 w-10" />
                  <div className="text-white font-bold text-xl md:block hidden">
                    Forum
                  </div>
                </div>
                <ul className="w-full bg-white">
                  <li className="p-1">
                    <Link
                      to="/diskusi"
                      className=" flex w-full py-2 px-3 items-center md:justify-start justify-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                    >
                      <BiHomeAlt />
                      <span className="md:flex hidden ">Beranda</span>
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      to="/diskusi/cari"
                      className=" flex w-full py-2 px-3 items-center md:justify-start justify-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                    >
                      <BiSearchAlt />
                      <span className="md:flex hidden ">Cari</span>
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      to="/diskusi/jelajah-ruang"
                      className=" flex w-full py-2 px-3 items-center md:justify-start justify-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                    >
                      <TbMessageSearch />
                      <span className="md:flex hidden ">Jelajah Ruang</span>
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      to="/diskusi/ruang"
                      className=" flex w-full py-2 px-3 items-center md:justify-start justify-center gap-2 text-lg hover:bg-darkGray_10 rounded-md"
                    >
                      <BiChat />
                      <span className="md:flex hidden ">Ruang</span>
                    </Link>
                  </li>
                </ul>
                <Link
                  to="beranda"
                  className=" flex w-full py-3 px-3 md:justify-start justify-center font-semibold text-white items-center gap-3"
                >
                  <FaPlusCircle />
                  <span className="md:flex hidden ">Buat Ruang</span>
                </Link>
              </div>
            </div>
            <div className=" md:col-span-3 col-span-5 h-auto">{children}</div>
            <div className="bg-netral_10 md:col-span-2 col-end-7 col-span-5 w-full shadow-md h-max  sticky top-32 ">
              <div className="flex py-3 flex-col justify-center items-center">
                <span>Spase Iklan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiskusiTemplate;
