import React from "react";
import logo1 from "../../assets/logo/Logo1.png";
import bgLogo from "../../assets/logo/bg-logo.svg";
import bgHero from "../../assets/bg-hero.jpg";
import { Artikel, Fitur, HargaGrub } from "../../components/moleculs";
import Button from "../../components/atoms/Button";
import TemplateLogin from "../../template/TemplateLogin";
import { useSelector } from "react-redux";
const HomeLogin = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("usernya", user);
  return (
    <TemplateLogin>
      <div className=" ">
        <div
          id="home"
          className="h-[120vh] bg-blue-300 bg-cover  "
          style={{ backgroundImage: `URL(${bgHero})` }}
        >
          <div className="container h-full grid md:grid-cols-2  mx-auto">
            <div className="flex flex-col justify-center md:pl-20 md:px-5 px-3 md:gap-8 gap-3">
              <h1 className="md:text-6xl text-3xl text-white font-bold tracking-wide leading-9 ">
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
          className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right-top md:bg-auto bg-[length:0px_0px]`}
          style={{ backgroundImage: `URL(${bgLogo})` }}
        >
          <div
            id="tentang"
            className=" md:px-20 px-3 md:pt-36 pt-20 container mx-auto grid md:grid-cols-2 items-center md:gap-3 gap-10	"
          >
            <img
              src={logo1}
              alt=""
              className="md:w-[440px] w-[190px] mx-auto"
            />
            <div className="flex flex-col md:gap-10 gap-4 md:text-start text-center">
              <h1 className="md:text-5xl text-2xl font-semibold">
                Tentang Kami
              </h1>
              <p className="md:text-xl text-sm ">
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
            className="relative z-10 h-auto md:px-20 md:pt-36 px-3  py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
          >
            <div className="md:flex flex-col justify-center items-center gap-3 hidden">
              <h1 className="md:text-5xl text-2xl font-semibold">
                Rata-rata harga pangan
              </h1>
              <span className="md:text-xl text-base text-center">
                Rata-rata harga pangan yang ditampilkan merupakan data terbaru
                dan real time
              </span>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 w-full items-center">
              <h1 className="md:text-3xl text-2xl font-semibold text-start w-full">
                Harga Pangan
              </h1>
              <HargaGrub />
              <Button
                type="LongPrimaryButtonIconRow"
                text="Lihat Lebih Banyak"
              />
            </div>
          </div>
          {/* Layanan Kami */}
          <Fitur Title="Coba Fitur Lainya" />
          <div
            className={`h-full w-full z-0 absolute -top-28  bg-no-repeat  bg-right-bottom scale-x-[-1] md:bg-auto bg-[length:0px_0px]`}
            style={{ backgroundImage: `URL(${bgLogo})` }}
          ></div>
        </div>

        {/* Artikel */}
        <Artikel className="bg-darkGray_20" TextColor="text-black" />
      </div>
    </TemplateLogin>
  );
};

export default HomeLogin;
