import React, { useState } from "react";
import bgHero from "../../assets/bgHeroAnalisis.jpg";
import Button from "../../components/atoms/Button";
import Searchable from "react-searchable-dropdown";
import { dataProvinsi } from "../../data";
import { FormAnalisis } from "../../components/moleculs";

const provinsi = dataProvinsi;

const kota = [
  {
    value: "blitar",
    label: "blitar",
  },
  {
    value: "magelang",
    label: "magelang",
  },
  {
    value: "surabaya",
    label: "surabaya",
  },
  {
    value: "bali",
    label: "bali",
  },
  {
    value: "malang",
    label: "malang",
  },
];
const Analisis = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
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
              <Searchable
                placeholder="Pilih Lokasi Anda"
                value={["popular"]}
                hideSelected
                options={provinsi}
                onSelect={(value) => {
                  console.log(value);
                }}
              />
              <Searchable
                placeholder="Pilih Kota/Kabupaten"
                value={["popular"]}
                hideSelected
                options={kota}
                onSelect={(value) => {
                  console.log(value);
                }}
              />
              <Button
                type="LongPrimaryButtonIconRow"
                text="Selanjutnya"
                className="hover:bg-[#357c70]"
                onClick={() => setOpenModal(!openModal)}
              />
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <FormAnalisis onClick={() => setOpenModal(!openModal)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Analisis;
