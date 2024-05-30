import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import bgLogo from "../assets/logo/bg-logo.svg";

import { Link } from "react-router-dom";
import { BiChat, BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import logo from "../assets/logo/Logo1_white.svg";
import { TbMessageSearch } from "react-icons/tb";
import { FormAnalisis, FormTambahRuang } from "../components/moleculs";

const ForumDiskusiTemplate = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <div>
      <div
        className={`min-h-[120vh] h-auto md:pt-32 pt-28 bg-no-repeat  bg-right-top md:bg-auto bg-[length:0px_0px]`}
        style={{ backgroundImage: `URL(${bgLogo})` }}
      >
        <div className="container mx-auto md:px-10 px-3">
          <div className="grid grid-cols-6 md:gap-4 gap-2 h-max mb-12 ">
            <div className="bg-primary rounded-2xl shadow-md h-max  sticky md:top-32 top-28">
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
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className=" flex w-full py-3 px-3 md:justify-start justify-center font-semibold text-white items-center gap-3"
                >
                  <FaPlusCircle />
                  <span className="md:flex hidden ">Buat Ruang</span>
                </button>
              </div>
            </div>
            <div className=" md:col-span-3 col-span-5 h-auto">{children}</div>
            <div className="bg-netral_10 md:col-span-2 col-end-7 col-span-5 w-full shadow-md   sticky top-32 h-max overflow-hidden">
              <div className="flex py-3 flex-col justify-center items-center">
                <span className="pb-2"> Advertisement</span>
                <img
                  src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/425630251_803126335194979_2005575607683777784_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p695x870_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsub8-1.fna&_nc_cat=102&_nc_ohc=-_Adx3H0nC8Q7kNvgE5Pyu-&ccb=1-7&_nc_sid=5f2048&oh=00_AYC6w1s4yPxgeSi0GgEo1_pu_lKMwGly3atnM7PGieP4_w&oe=66535601"
                  alt=""
                  className="w-[95%] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <FormTambahRuang onClick={() => setOpenModal(!openModal)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ForumDiskusiTemplate;
