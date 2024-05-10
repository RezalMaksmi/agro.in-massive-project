import React from "react";
import bgHero from "../../assets/bgHeroAnalisis.jpg";
import Button from "../../components/atoms/Button";

const Analisis = () => {
  return (
    <div>
      <div
        id="home"
        className="h-[105vh] bg-blue-300 bg-cover  "
        style={{ backgroundImage: `URL(${bgHero})` }}
      >
        <div className="container h-full grid md:grid-cols-2  mx-auto">
          <div className="flex flex-col justify-center md:pl-20 px-5 gap-8">
            <h1 className="md:text-6xl text-4xl text-primary font-bold tracking-wide">
              Pemetaan Cuaca dan Analisis Tanah
            </h1>
            <span className="text-black md:text-2xl text-lg">
              Menampilkan prakira cuaca dan analisis kecocokan tanaman dan
              kondidi tanah di suatu daerah dengan aktual agar petani mampu
              memprediksi langkah-langkah tepat untuk produk pertaniannya.
            </span>
            <div className="flex flex-col gap-3 mt-2 items-end">
              <input
                type="text"
                className="px-4 py-3 bg-netral_10 border-2 border-dark_20 rounded-full w-full "
                placeholder="Pilih Lokasi Anda"
              />
              <input
                type="text"
                className="px-4 py-3 bg-netral_10 border-2 border-dark_20 rounded-full w-full "
                placeholder="Pilih Lokasi Anda"
              />
              <Button type="LongPrimaryButtonIconRow" text="Selanjutnya" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analisis;
