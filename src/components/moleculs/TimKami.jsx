import React from "react";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import aura from "../../assets/tim/aura.png";
import rezal from "../../assets/tim/rezal.png";
import hasna from "../../assets/tim/hasna.png";
import ilham from "../../assets/tim/ilham.png";
import ino from "../../assets/tim/ino.png";
import sipa from "../../assets/tim/sipa.png";

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
const TimKami = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div
        id="tim"
        className={`h-auto md:px-20 px-10 md:py-20 py-14 md:gap-16 gap-10 container mx-auto flex flex-col justify-center items-center `}
      >
        <h1 className="md:text-5xl text-2xl font-semibold">Tim Kami</h1>
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
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1500: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            className="mySwiper mx-auto"
          >
            {dataProfile.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="bg-slate-400 overflow-hidden text-[#fff] flex justify-center mx-auto w-[230px] h-[300px] relative rounded-3xl">
                    <img src={item.image} alt="" className="object-cover" />
                    <div className="absolute bottom-3 text-center">
                      <h5 className="md:text-2xl text-base font-semibold">
                        {item.name}
                      </h5>
                      <span className="md:text-xl text-ls">{item.role}</span>
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

export default TimKami;
