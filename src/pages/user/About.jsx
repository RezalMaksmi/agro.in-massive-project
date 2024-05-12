import React from "react";
import bgHero from "../../assets/bgHeroAbout.jpg";
import logo1 from "../../assets/logo/Logo1_white.svg";
import logoTextWhite from "../../assets/logo/logo-txt-putih.png";

import { Fitur, TimKami } from "../../components/moleculs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" ">
      <div
        id="home"
        className="h-[120vh] bg-blue-300 bg-cover  "
        style={{ backgroundImage: `URL(${bgHero})` }}
      >
        <div className="container h-full grid md:grid-cols-2  mx-auto">
          <div className="flex flex-col justify-center md:pl-20 px-5 gap-8">
            <div className="flex flex-row gap-2 text-white relative -top-20 ">
              <Link to={"/home"}>Home</Link>
              <span>{">"}</span>
              <span>Tentang Kami</span>
            </div>
            <img src={logoTextWhite} alt="" />
            <span className="text-white md:text-2xl text-lg">
              Solusi Petani Modern untuk Pertanian yang Lebih Baik.
            </span>
          </div>
        </div>
      </div>
      <div
        className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right-top`}
      >
        {/* Layanan Kami */}
        <Fitur Title="Layanan" />
      </div>

      <div
        id="tentang"
        className=" md:px-20 px-5 md:py-20 py-10 container mx-auto grid md:grid-cols-2 items-center md:gap-3 gap-10 bg-primary text-white"
      >
        <img src={logo1} alt="" className="md:w-[440px] w-[190px] mx-auto" />
        <div className="flex flex-col md:gap-10 gap-5 md:text-start text-center">
          <h1 className="md:text-5xl text-xl font-semibold">Tujuan Kami</h1>
          <p className="md:text-xl text-base ">
            Agro.in merupakan platform layanan penyedia informasi aktual yang
            terintegrasi, yang bermanfaat bagi kegiatan industri petani untuk
            mengoptimalkan usaha pertanian. Tiga nilai yang ingin kami berikan
            untuk perkembangan pertanian Indonesia yaitu informasi, Inegritas,
            dan industri.
            <br />
            <br />
            Dengan fitur yang kami kembangkan, diharap mampu menjawab banyak
            masalah di sektor pertanian.
          </p>
        </div>
      </div>
      {/* Artikel */}
      <TimKami />
    </div>
  );
};

export default About;
