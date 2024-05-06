import React from "react";
import logo1 from "../assets/logo/Logo1.png";
import bgLogo from "../assets/logo/bg-logo.svg";

import layanan2 from "../assets/layanan2.jpg";
import layanan1 from "../assets/layanan1.jpg";
import layanan3 from "../assets/layanan3.jpg";
import layanan4 from "../assets/layanan4.jpg";
import bgHero from "../assets/bg-hero.jpg";
import logoPutih from "../assets/logo/logoputih.svg";
const LandingPage = () => {
  return (
    <div className=" ">
      <div
        className="h-[120vh] bg-blue-300 bg-cover  "
        style={{ backgroundImage: `URL(${bgHero})` }}
      >
        <div className="container h-full grid grid-cols-2 mx-auto">
          <div className="flex flex-col justify-center pl-20 gap-8">
            <h1 className="text-6xl text-white font-semibold tracking-wide">
              Bertani dengan optimal untuk hasil yang maksimal
            </h1>
            <span className="text-white text-2xl">
              Informasi rata rata harga pangan yang aktual dan disajikan secara
              real time
            </span>
          </div>
        </div>
      </div>
      <div
        className={`h-auto bg-[#fff] rounded-t-[120px] -top-28 relative bg-no-repeat  bg-right`}
        style={{ backgroundImage: `URL(${bgLogo})` }}
      >
        <div className=" px-20 pt-36 container mx-auto grid grid-cols-2 items-center 	">
          <img src={logo1} alt="" className="w-[440px] " />
          <div className="flex flex-col gap-10 ">
            <h1 className="text-5xl font-semibold">Tentang Kami</h1>
            <p className="md:text-xl text-base ">
              Berangkat dari permasalah yang sering dialami petani mengenai
              kegagalan dalam pertanian, kesulitan mencari informasi karena
              terpencarnya beberapa informasi yang dibutuhkan, dan kurangnya
              tempat berdiskusi antar petani menjadi landasan dibentuknya
              Agro.in
              <br />
              <br />
              Agro.in menjadi sebuah platform berbasis web yang memberikan
              informasi pertanian seperti pemetaan cuaca, analisis tanah, dan
              forum diskusi yang bisa dimanfaatkan petani untuk meningkatkan
              usaha pertanian mereka.
            </p>
          </div>
        </div>

        {/* {  fitur Layanan  } */}
        <div className="h-auto px-20 py-36 gap-14 container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold">Layanan</h1>

          <div className="grid grid-cols-4 gap-6">
            <div className="p-4 md:w-[260px] md:h-[410px] w-full ">
              <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
                <img src={layanan1} alt="" className="object-contain" />
                <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
                  <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                    <img
                      src={logoPutih}
                      alt=""
                      className="w-10 group-hover/item:w-7 transform transition-all duration-500"
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

            <div className="p-4 md:w-[260px] md:h-[410px] w-full ">
              <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
                <img src={layanan2} alt="" className="object-contain" />
                <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
                  <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                    <img
                      src={logoPutih}
                      alt=""
                      className="w-10 group-hover/item:w-7 transform transition-all duration-500"
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

            <div className="p-4 md:w-[260px] md:h-[410px] w-full ">
              <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
                <img src={layanan3} alt="" className="object-contain" />
                <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
                  <div className="px-4 flex flex-col gap-1 relative -bottom-20 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                    <img
                      src={logoPutih}
                      alt=""
                      className="w-10 group-hover/item:w-7 transform transition-all duration-500"
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

            <div className="p-4 md:w-[260px] md:h-[410px] w-full ">
              <div className="group/item md:w-[260px] md:h-[410px]  rounded-xl transform transition duration-500 hover:scale-110 overflow-hidden relative">
                <img src={layanan4} alt="" className="object-contain" />
                <div className="absolute flex justify-end items-end flex-col right-0 left-0 z-30 bottom-0 text-white">
                  <div className="px-4 flex flex-col gap-1 relative -bottom-24 group-hover/item:bottom-6 transform transition-all duration-500 text-end justify-end items-end">
                    <img
                      src={logoPutih}
                      alt=""
                      className="w-10 group-hover/item:w-7 transform transition-all duration-500"
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
      </div>
    </div>
  );
};

export default LandingPage;
