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

import bgHero from "../../assets/bg-hero.jpg";

const Fitur = ({ Title }) => {
  return (
    <div
      id="layanan"
      className="h-auto z-10 relative md:px-20 md:pt-36 px-10 py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-semibold">{Title}</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5">
        <div className="md:p-4 p-0 md:w-[260px] md:h-[410px] w-full ">
          <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
            <img src={layanan1} alt="" className="object-contain" />
            <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
              <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                <img
                  src={IcHarga}
                  alt=""
                  className="w-20 group-hover/item:w-10 transform transition-all duration-500"
                />
                <h6 className="text-4xl  font-bold group-hover/item:text-3xl transform transition-all duration-500">
                  Harga <br /> Pangan
                </h6>
              </div>
              <div className="p-3 bg-[#1A3D37] backdrop-blur-md opacity-0 bg-opacity-15 group-hover/item:flex group-hover/item:opacity-100 flex-col transform transition duration-500 w-full text-sm font-normal">
                <h6 className="text-base">Subtitle</h6>
                <span className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-4 p-0 md:w-[260px] md:h-[410px] w-full ">
          <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
            <img src={layanan2} alt="" className="object-contain" />
            <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
              <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                <img
                  src={IcCuaca}
                  alt=""
                  className="w-20 group-hover/item:w-10 transform transition-all duration-500"
                />
                <h6 className="text-4xl  font-bold group-hover/item:text-3xl transform transition-all duration-500">
                  Analisis <br /> Cuaca
                </h6>
              </div>
              <div className="p-3 bg-[#1A3D37] backdrop-blur-md opacity-0 bg-opacity-15 group-hover/item:flex group-hover/item:opacity-100 flex-col transform transition duration-500 w-full text-sm font-normal">
                <h6 className="text-base">Subtitle</h6>
                <span className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-4 p-0 md:w-[260px] md:h-[410px] w-full ">
          <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
            <img src={layanan3} alt="" className="object-contain" />
            <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
              <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                <img
                  src={IcTanah}
                  alt=""
                  className="w-20 group-hover/item:w-10 transform transition-all duration-500"
                />
                <h6 className="text-4xl  font-bold group-hover/item:text-3xl transform transition-all duration-500">
                  Analisis <br /> Tanah
                </h6>
              </div>
              <div className="p-3 bg-[#1A3D37] backdrop-blur-md opacity-0 bg-opacity-15 group-hover/item:flex group-hover/item:opacity-100 flex-col transform transition duration-500 w-full text-sm font-normal">
                <h6 className="text-base">Subtitle</h6>
                <span className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-4 p-0 md:w-[260px] md:h-[410px] w-full ">
          <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
            <img src={layanan4} alt="" className="object-contain" />
            <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
              <div className="px-4 flex flex-col gap-1 relative -bottom-24 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                <img
                  src={IcDiskusi}
                  alt=""
                  className="w-20 group-hover/item:w-10 transform transition-all duration-500"
                />
                <h6 className="text-4xl  font-bold group-hover/item:text-3xl transform transition-all duration-500">
                  Forum <br /> Diskusi
                </h6>
              </div>
              <div className="p-3 bg-[#1A3D37] backdrop-blur-md opacity-0 bg-opacity-15 group-hover/item:flex group-hover/item:opacity-100 flex-col transform transition duration-500 w-full text-sm font-normal">
                <h6 className="text-base">Subtitle</h6>
                <span className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
