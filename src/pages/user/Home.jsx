import React from "react";
import logo1 from "../../assets/logo/Logo1.png";
import bgLogo from "../../assets/logo/bg-logo.svg";

import { hargaPangan } from "../../data";

import bgHero from "../../assets/bg-hero.jpg";

import { Artikel, Fitur, HargaGrub } from "../../components/moleculs";
import Button from "../../components/atoms/Button";

const Home = () => {
  return (
    <div className=" ">
      <div
        id="home"
        className="h-[120vh] bg-blue-300 bg-cover  "
        style={{ backgroundImage: `URL(${bgHero})` }}
      >
        <div className="container h-full grid md:grid-cols-2  mx-auto">
          <div className="flex flex-col justify-center md:pl-20 px-5 gap-8">
            <h1 className="md:text-6xl text-4xl text-white font-semibold tracking-wide">
              Bertani dengan optimal untuk hasil yang maksimal
            </h1>
            <span className="text-white md:text-2xl text-lg">
              Informasi rata rata harga pangan yang aktual dan disajikan secara
              real time
            </span>
          </div>
        </div>
      </div>
      <div
        className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right-top`}
        style={{ backgroundImage: `URL(${bgLogo})` }}
      >
        <div
          id="tentang"
          className=" md:px-20 px-5 md:pt-36 pt-20 container mx-auto grid md:grid-cols-2 items-center md:gap-3 gap-10	"
        >
          <img src={logo1} alt="" className="md:w-[440px] w-[190px] mx-auto" />
          <div className="flex flex-col md:gap-10 gap-5 md:text-start text-center">
            <h1 className="md:text-5xl text-xl font-semibold">Tentang Kami</h1>
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
        <div
          id="hargaPangan"
          className="relative z-10 h-auto md:px-20 md:pt-36 px-10 py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-5xl font-semibold">Rata-rata harga pangan</h1>
            <span className="md:text-xl text-base">
              Rata-rata harga pangan yang ditampilkan merupakan data terbaru dan
              real time
            </span>
          </div>
          <div className="flex flex-col gap-10 w-full items-center">
            <h1 className="text-3xl font-semibold text-start w-full">
              Harga Pangan
            </h1>
            <HargaGrub />
            <Button type="LongPrimaryButtonIconRow" text="Lihat Lebih Banyak" />
          </div>
        </div>
        {/* Layanan Kami */}
        <Fitur Title="Coba Fitur Lainya" />
        <div
          className={`h-full w-full z-0 absolute -top-28  bg-no-repeat  bg-right-bottom scale-x-[-1]`}
          style={{ backgroundImage: `URL(${bgLogo})` }}
        ></div>
      </div>

      {/* Artikel */}
      <Artikel className="bg-darkGray_20" TextColor="text-black" />
    </div>
  );
};

export default Home;
