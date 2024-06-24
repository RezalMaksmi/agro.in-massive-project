import React, { Suspense, useEffect, useState } from "react";
import bgHero from "../../assets/bg-heroHargaPangan.jpg";
import { HargaGrub, Loading } from "../../components/moleculs";
import TemplateLogin from "../../template/TemplateLogin";

const HargaPangan = () => {
  return (
    <TemplateLogin>
      <div>
        <div
          id="home"
          className="h-[100vh]  bg-cover  "
          style={{ backgroundImage: `URL(${bgHero})` }}
        >
          <div className="container h-full grid md:grid-cols-2 px-5 mx-auto">
            <div className="flex flex-col justify-center md:pl-20 px-5 md:gap-8 gap-4">
              <h1 className="md:text-6xl text-4xl text-white font-semibold tracking-wide">
                Harga Pangan
              </h1>
              <span className="text-white md:text-2xl text-lg">
                Informasi rata rata harga pangan yang aktual dan disajikan
                secara real time
              </span>
            </div>
          </div>
        </div>

        <div
          id="hargaPangan"
          className="relative z-10 h-auto md:px-20  px-4 py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-10 w-full items-center ">
            <HargaGrub full={true} />
          </div>
        </div>
      </div>
    </TemplateLogin>
  );
};

export default HargaPangan;
