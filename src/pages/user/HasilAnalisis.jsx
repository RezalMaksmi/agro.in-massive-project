import React from "react";
import bgHero from "../../assets/bgHeroAnalisisHasil.jpg";
import TemplateLogin from "../../template/TemplateLogin";
import { useSelector } from "react-redux";
import { Weather } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

const HasilAnalisis = () => {
  const navigate = useNavigate();
  const { data, cuaca, location, temp } = useSelector(
    (state) => state.analisis
  );

  return (
    <TemplateLogin>
      <div>
        <div
          id="home"
          className="h-[100vh]  bg-cover  "
          style={{ backgroundImage: `URL(${bgHero})` }}
        >
          <div className="container h-full grid md:grid-cols-2  mx-auto">
            <div className="flex flex-col justify-center md:pl-20 md:px-5 px-4 gap-4">
              <h1 className="md:text-4xl text-3xl text-white font-bold tracking-wide">
                {data
                  ? "Hasil Prediksi Cuaca dan Tanah"
                  : "Isi form pengecekan"}
              </h1>
              {!data && (
                <button
                  onClick={() => navigate("/analisis")}
                  className="bg-secondary text-dark_30 font-semibold rounded-full w-max px-3 py-2"
                >
                  Isi sekarang
                </button>
              )}
              {location && (
                <div className="flex flex-col md:gap-2 gap-1 text-white bg-[#ffffff49] backdrop-blur-sm rounded-xl md:px-6 px-3 py-5 ">
                  <h1 className="md:text-3xl text-xl font-semibold mb-3">
                    Lokasi Anda
                  </h1>
                  <div className="grid grid-cols-2">
                    <span className="md:text-xl text-base ">Provinsi</span>
                    <span className="md:text-xl text-base">
                      {" "}
                      : {location.domain}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <span className="md:text-xl text-base ">
                      Kota / Kabupaten
                    </span>
                    <span className="md:text-xl text-base">
                      {" "}
                      : {location.description}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`h-auto bg-[#fff] md:rounded-t-[120px] rounded-t-[25px] -top-28 relative bg-no-repeat  bg-right ${
            !data ? "hidden" : ""
          }`}
        >
          <div className="md:px-20 px-5 container mx-auto flex flex-col items-center  md:py-24 py-14 md:gap-20 gap-10">
            <h1 className="md:text-5xl text-xl font-semibold ">
              Prakira Cuaca
            </h1>

            <div className="grid grid-rows-4  grid-flow-col md:gap-8 gap-3 w-full">
              <div className="md:row-span-4 row-span-2 col-span-8 bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                <Weather cuaca={cuaca && cuaca.name} />
                <span className="text-xl">{cuaca && cuaca.name}</span>
                <h1 className="md:text-5xl text-xl font-semibold ">
                  {temp && temp.celcius}
                </h1>
              </div>
              <div className="md:row-span-2  col-span-4 w-full bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                <span className="text-xl">Suhu</span>
                <h1 className="md:text-5xl text-xl font-semibold ">
                  {temp && temp.fahrenheit}
                </h1>
              </div>
              <div className="md:row-span-2  col-span-4 w-full bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                <span className="text-xl">Kelembapan</span>
                <h1 className="md:text-5xl text-xl font-semibold ">62%</h1>
              </div>
              <div className="md:row-span-2  col-span-4 w-full bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                <span className="text-xl">Angin TL</span>
                <h1 className="md:text-5xl text-xl font-semibold ">8 Km/jam</h1>
              </div>
              <div className="md:row-span-2  col-span-4 w-full bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                <span className="text-xl">Tekanan Udara</span>
                <h1 className="md:text-5xl text-xl font-semibold ">
                  1.008 hPa
                </h1>
              </div>
            </div>
          </div>

          <div className="md:px-20 px-5 container mx-auto flex flex-col items-center  md:py-24 py-14 md:gap-20 gap-10">
            <h1 className="md:text-5xl text-xl font-semibold ">
              Analisis Tanah
            </h1>

            <div className="grid grid-cols-2 md:gap-8 gap-3 w-full">
              <div className="">
                <div className="row-span-2 bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                  <span className="text-xl">PH Tanah</span>
                  <h1 className="md:text-5xl text-xl font-semibold ">
                    {data && data.PhTanah}
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="row-span-2 bg-darkGray_10 rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-7 gap-4">
                  <span className="text-xl">Jenis Tanah</span>
                  <h1 className="md:text-5xl text-xl font-semibold ">
                    {data && data.teksturTanah}
                  </h1>
                </div>
              </div>
              <div className="col-span-2 ">
                <div
                  className={`row-span-2  rounded-xl shadow-md border-2 border-darkGray_10 flex flex-col justify-center items-center py-10 gap-4  ${
                    data == "Cocok" ? "bg-primary text-white" : "bg-secondary"
                  }`}
                >
                  <span className="text-xl">Hasil Prediksi Tanam</span>
                  <h1 className="md:text-5xl text-xl font-semibold ">
                    {data && data.result}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TemplateLogin>
  );
};

export default HasilAnalisis;
