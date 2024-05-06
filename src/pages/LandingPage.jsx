import React from "react";
import logo1 from "../assets/logo/Logo1.png";
import bgLogo from "../assets/logo/bg-logo.svg";

import layanan2 from "../assets/layanan2.jpg";
import layanan1 from "../assets/layanan1.jpg";
import layanan3 from "../assets/layanan3.jpg";
import layanan4 from "../assets/layanan4.jpg";

import aura from "../assets/tim/aura.jpg";
import rezal from "../assets/tim/rezal.jpg";
import hasna from "../assets/tim/hasna.jpg";
import ilham from "../assets/tim/ilham.jpg";
import ino from "../assets/tim/ino.jpg";
import sipa from "../assets/tim/sipa.jpg";

import bgHero from "../assets/bg-hero.jpg";
import logoPutih from "../assets/logo/logoputih.svg";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const dataProfile = [
  {
    image: aura,
    name: "Lintang Aura S",
    role: "Hustler",
  },
  {
    image: hasna,
    name: "Raidah Hasna M",
    role: "Hipster",
  },
  {
    image: sipa,
    name: "Assyifa Latifah T",
    role: "Hipster",
  },
  {
    image: rezal,
    name: "Rezal Nur S",
    role: "Hacker",
  },
  {
    image: ilham,
    name: "Abdullah Ilham",
    role: "Hacker",
  },
  {
    image: ino,
    name: "Inosensius G. A",
    role: "Hacker",
  },
];

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
        <div className="h-auto md:px-20 md:pt-36 px-10 py-12 gap-14 container mx-auto flex flex-col justify-center items-center">
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
      <div className="h-auto  px-20 pb-36 gap-16 container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold">Tim Kami</h1>
        <div className=" w-full items-center px-3">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={4}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper "
          >
            {dataProfile.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="bg-slate-400 overflow-hidden text-[#fff] flex justify-center w-[230px] h-[300px] relative rounded-3xl">
                    <img src={item.image} alt="" className="object-cover" />
                    <div className="absolute bottom-3 text-center">
                      <h5 className="text-2xl font-semibold">{item.name}</h5>
                      <span className="text-xl">{item.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
