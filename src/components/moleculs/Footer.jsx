import React from "react";
import logo from "../../assets/logo/logo-txt-putih.png";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#265c53] relative">
      <div className="w-full  rounded-t-[35px] bg-[#265c53] text-white relative -top-7">
        <div className="container lg:px-20 px-5 py-10 mx-auto grid md:grid-cols-4 gap-5">
          <div className="flex flex-col items-start ">
            <img src={logo} alt="" className="md:h-14 h-12 object-contain " />
            <span className="text-lg mt-2">
              Layanan penyedia informasi aktual dan bermanfaat untuk
              meningkatkan kesejahteraan petani.
            </span>
          </div>

          <div className="flex flex-col items-center text-start">
            <div className="md:w-auto w-full">
              <h1 className="text-lg font-bold">Agro.in</h1>
              <ul className="mt-2">
                <li>
                  <a href="">Beranda</a>
                </li>
                <li>
                  <a href="">Tentang Kami</a>
                </li>
                <li>
                  <a href="">Artikel</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-start">
            <div className="md:w-auto w-full">
              <h1 className="text-lg font-bold">Layanan</h1>
              <ul className="mt-2">
                <li>
                  <a href="">Harga Pangan</a>
                </li>
                <li>
                  <a href="">Analisis Cuaca</a>
                </li>
                <li>
                  <a href="">Analisis Tanah</a>
                </li>
                <li>
                  <a href="">Forum Diskusi</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-start">
            <div className="md:w-auto w-full">
              <h1 className="text-lg font-bold">Kontak Kami</h1>
              <span>Email</span>
              <ul className="flex flex-row gap-4 mt-4">
                <li className="text-[#15312C] w-10 h-10 flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#5F7773] hover:text-white text-xl ">
                  <a href="">
                    <LuInstagram />
                  </a>
                </li>
                <li className="text-[#15312C] w-10 h-10 flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#5F7773] hover:text-white text-xl ">
                  <a href="">
                    <LuFacebook />
                  </a>
                </li>
                <li className="text-[#15312C] w-10 h-10 flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#5F7773] hover:text-white text-xl ">
                  <a href="">
                    <LuLinkedin />
                  </a>
                </li>
                <li className="text-[#15312C] w-10 h-10 flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#5F7773] hover:text-white text-xl ">
                  <a href="">
                    <LuTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#1A3D37] w-full flex justify-center items-center py-5 relative -bottom-7">
          Copyright ® 2024 Agro.in All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
