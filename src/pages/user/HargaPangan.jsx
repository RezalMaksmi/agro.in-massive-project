import React, { useEffect, useState } from "react";
import bgHero from "../../assets/bg-heroHargaPangan.jpg";
import axios from "axios";
import { HargaGrub } from "../../components/moleculs";

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
          <HargaGrub />
        </div>
      </div>
    </div>
  );
};

export default HargaPangan;
