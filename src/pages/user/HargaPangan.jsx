import React, { useEffect, useState } from "react";
import bgHero from "../../assets/bg-heroHargaPangan.jpg";
import { hargaPangan } from "../../data";
import CardHargaPangan from "../../components/atoms/CardHargaPangan";
import axios from "axios";

const HargaPangan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    axios
      .get("https://badanpangan.go.id/api/panel-harga/2024-05-10/3")
      .then((response) => {
        // Set data to state
        console.log("isinya apaya", response);
        setData(eval(JSON.stringify(response.data)));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <div
        id="home"
        className="h-[100vh] bg-blue-300 bg-cover  "
        style={{ backgroundImage: `URL(${bgHero})` }}
      >
        <div className="container h-full grid md:grid-cols-2 px-5 mx-auto">
          <div className="flex flex-col justify-center md:pl-20 px-5 gap-8">
            <h1 className="md:text-6xl text-4xl text-white font-semibold tracking-wide">
              Harga Pangan
            </h1>
            <span className="text-white md:text-2xl text-lg">
              Informasi rata rata harga pangan yang aktual dan disajikan secara
              real time
            </span>
          </div>
        </div>
      </div>

      <div
        id="hargaPangan"
        className="relative z-10 h-auto md:px-20  px-10 py-12 gap-14 container mx-auto flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-10 w-full items-center">
          <h1 className="text-3xl font-semibold text-start w-full">
            Harga Pangan
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
            <div className="flex flex-col md:col-span-1 col-span-3 gap-1 justify-start">
              <span className="font-semibold text-lg">Jenis Data</span>
              <input
                type="text"
                placeholder="Jenis data..."
                className="border-2 border-dark_10 px-3 py-2 rounded-full"
              />
            </div>

            <div className="flex flex-col gap-1 justify-start">
              <span className="font-semibold text-lg">Komoditas</span>
              <input
                type="text"
                placeholder="Jenis data..."
                className="border-2 border-dark_10 px-3 py-2 rounded-full"
              />
            </div>

            <div className="flex flex-col gap-1 justify-start">
              <span className="font-semibold text-lg">Tahun</span>
              <input
                type="date"
                placeholder="Jenis data..."
                className="border-2 border-dark_10 px-3 py-2 rounded-full"
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 mb-3">
            {/* items */}
            {hargaPangan.map((items, i) => {
              return (
                <CardHargaPangan
                  Key={i + 1}
                  Title={items.nama}
                  Img={items.img}
                  Price={items.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HargaPangan;
