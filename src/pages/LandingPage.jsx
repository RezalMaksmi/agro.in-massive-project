import React from "react";
import logo1 from "../assets/logo/Logo1.png";
import bgLogo from "../assets/logo/bg-logo.svg";

import bgHero from "../assets/bg-hero.jpg";
import logoPutih from "../assets/logo/logoputih.svg";

import { Artikel, Fitur, Info, TimKami } from "../components/moleculs";

const LandingPage = () => {
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
        className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right`}
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
        <Fitur Title="Layanan" />
      </div>
      {/* Tim kami */}
      <TimKami className={`bg-darkGray_10`} />

      {/* Artikel */}
      <Artikel TextColor="text-white" />

      {/* Info */}
      <Info />
    </div>
  );
};

export default LandingPage;
