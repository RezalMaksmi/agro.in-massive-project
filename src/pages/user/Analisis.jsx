import React, { useEffect, useState } from "react";
import bgHero from "../../assets/bgHeroAnalisis.jpg";
import Button from "../../components/atoms/Button";
import Searchable from "react-searchable-dropdown";
import { dataProvinsi } from "../../data";
import { FormAnalisis } from "../../components/moleculs";
import TemplateLogin from "../../template/TemplateLogin";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  AnalisisCuacaAct,
  AnalisisTemperatureAct,
  getLocationAct,
} from "../../redux/featch/Analisis";

async function GetLastIndexWeather(times, currentTime) {
  const cc = await times.filter((c) => {
    return c.h <= currentTime;
  });

  return cc[cc.length - 1];
}

async function GetLastIndexTemperature(times, currentTime) {
  const cc = await times.filter((c) => {
    return c.h <= currentTime;
  });

  return cc[cc.length - 1];
}

const provinsi = dataProvinsi;

const Analisis = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataSearchCity, setDataSearchCity] = useState([]);
  const [dataCity, setDataCity] = useState();
  const [data, setData] = useState(null);
  const [prov, setProv] = useState(null);
  const [cuaca, setCuaca] = useState({});
  const [time, setTime] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [temperatureValue, setTemperatureValue] = useState([]);
  const [currentTime, setCurrentTime] = useState("");

  const [selectedCity, setSelectedCity] = useState("");
  const removedSpacesCity = dataCity ? dataCity.split(" ").join("-") : "";

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setSelectedCity(event.target.value);
  };

  const removedSpacesProv = prov ? prov.split(" ").join("-") : "";
  const URL_API = `https://cuaca-gempa-rest-api.vercel.app/weather/${removedSpacesProv}/${removedSpacesCity.toLowerCase()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.getHours("en-US", { hour12: false }));
    }, 1000);
    () => clearInterval(interval);

    fetchData();
    fetchCity();
  }, [prov, dataCity, currentTime, openModal, selectedCity]);

  cuaca && dispatch(AnalisisCuacaAct(cuaca));
  temperatureValue && dispatch(AnalisisTemperatureAct(temperatureValue));
  const fetchData = async () => {
    try {
      const response = await axios.get(URL_API);
      setData(response.data.data);
      setTime(await response.data.data.params[6].times);
      setTemperature(await response.data.data.params[5].times);

      setCuaca(await GetLastIndexWeather(time, currentTime));
      setTemperatureValue(
        await GetLastIndexTemperature(temperature, currentTime)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCity = async () => {
    try {
      const response = await axios.get(
        `https://cuaca-gempa-rest-api.vercel.app/weather/${removedSpacesProv}`
      );
      setDataSearchCity(await response.data.data.areas);
      dispatch(getLocationAct(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const data = [dataSearchCity ? dataSearchCity.map((items, i) => "value" : items.description) :""]

  // const filteredData = dataSearchCity.map((item, i) => {
  //   return (
  //     <option key={i} value={item.description.toLowerCase()}>
  //       {item.description}
  //     </option>
  //   );
  // });
  const filteredData = dataSearchCity.map((item, i) => {
    return {
      value: item.description,
      label: item.description,
    };
  });

  const dataFinalCity = filteredData;

  return (
    <TemplateLogin>
      <div>
        <div
          id="home"
          className="h-[105vh]  bg-cover  "
          style={{ backgroundImage: `URL(${bgHero})` }}
        >
          <div className="container h-full grid md:grid-cols-2  mx-auto">
            <div className="flex flex-col justify-center md:pl-20 px-5 md:gap-8 gap-4">
              <h1 className="md:text-6xl text-3xl text-primary font-bold tracking-wide">
                Pemetaan Cuaca dan Analisis Tanah
              </h1>
              <span className="text-black md:text-xl text-base">
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
                    setProv(value);
                    console.log(value);
                  }}
                />
                <Searchable
                  placeholder="Pilih Kota/Kabupaten"
                  value={["popular"]}
                  hideSelected
                  options={dataFinalCity}
                  onSelect={(value) => {
                    setDataCity(value);
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
          <FormAnalisis
            onClick={() => setOpenModal(!openModal)}
            submit={handleClick}
          />
        ) : (
          ""
        )}
      </div>
    </TemplateLogin>
  );
};

export default Analisis;
