import React from "react";
import logo1 from "../../assets/logo/Logo1.png";
import bgLogo from "../../assets/logo/bg-logo.svg";

import bgHero from "../../assets/bg-hero.jpg";

import { Artikel, Fitur, Info, TimKami } from "../../components/moleculs";
import TemplateLogin from "../../template/TemplateLogin";

const LandingPage = () => {
  return (
    <TemplateLogin>
      <div className="">
        <div
          id="home"
          className="h-[120vh] bg-blue-300 bg-cover  "
          style={{ backgroundImage: `URL(${bgHero})` }}
        >
          <div className="container h-full grid md:grid-cols-2  mx-auto">
            <div className="flex flex-col justify-center md:pl-20 md:px-5 px-3 md:gap-8 gap-4">
              <h1 className="md:text-6xl text-3xl text-white font-bold tracking-wide leading-10 ">
                Bertani dengan optimal untuk hasil yang maksimal
              </h1>
              <span className="text-white md:text-xl text-base">
                Informasi rata rata harga pangan yang aktual dan disajikan
                secara real time
              </span>
            </div>
          </div>
        </div>
        <div
          className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right md:bg-auto bg-[length:0px_0px]`}
          style={{ backgroundImage: `URL(${bgLogo})` }}
        >
          <div
            id="tentang"
            className=" md:px-20 px-4 md:pt-36 pt-20 container mx-auto grid md:grid-cols-2 items-center md:gap-3 gap-10	"
          >
            <img
              src={logo1}
              alt=""
              className="md:w-[440px] w-[190px] mx-auto"
            />
            <div className="flex flex-col md:gap-10 gap-5 md:text-start text-center">
              <h1 className="md:text-5xl text-2xl font-bold">Tentang Kami</h1>
              <p className="md:text-lg text-sm ">
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
    </TemplateLogin>
  );
};

export default LandingPage;
