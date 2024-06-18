import React, { useEffect, useState } from "react";
import CardHargaPangan from "../atoms/CardHargaPangan";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchable from "react-searchable-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getFoodPricesAPIAct } from "../../redux/featch/getData";

const HargaGrub = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [jenisDataValue, setJenisDataValue] = useState("");

  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const [startDate, endDate] = dateRange;
  const { foodPrices } = useSelector((state) => state.get);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatStartDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}-${1}`;
  };
  const currentDate = new Date();

  const fetchData = () => {
    dispatch(
      getFoodPricesAPIAct(
        `food-prices?type=${
          jenisDataValue ? jenisDataValue : "eceran"
        }&startDate=${
          startDate ? formatStartDate(startDate) : formatDate(currentDate)
        }&endDate=${endDate ? formatDate(endDate) : formatDate(currentDate)}`
      )
    );
  };
  console.log("apa ini", currentDate);

  useEffect(() => {
    // Fetch data when component mounts
    // axiosInstance
    //   .get("http://localhost:4000/food-prices")
    //   .then((response) => {
    //     // Set data to state
    //     console.log("isinya apaya", response);
    //     setData(eval(JSON.stringify(response)));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data: ", error);
    //   });

    fetchData();
  }, [jenisDataValue, startDate, endDate, dateRange]);

  console.log(formatDate(startDate));

  const jenisData = [
    {
      value: "eceran",
      label: "eceran",
    },
    {
      value: "grosir",
      label: "grosir",
    },
    {
      value: "produsen",
      label: "produsen",
    },
  ];

  console.log(foodPrices);
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
        <div className="flex flex-col md:col-span-1 col-span-3 gap-1 justify-start">
          <span className="font-semibold text-lg">Jenis Data</span>
          <Searchable
            placeholder="Pilih Jenis Data"
            value={["popular"]}
            hideSelected
            options={jenisData}
            onSelect={(value) => {
              setJenisDataValue(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col md:col-span-1 col-span-3 gap-1 justify-start">
          <span className="font-semibold text-lg">Tanggal</span>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            className=" px-3 py-3 rounded-full w-full bg-[#dddddd]"
            placeholderText="Pilih Tanggal"
            withPortal
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 mb-3">
        {/* items */}
        {foodPrices
          ? foodPrices.foodPrices.map((items, i) => {
              return (
                <CardHargaPangan
                  Key={i}
                  Title={items.name}
                  Img={items.img}
                  Price={items.price}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default HargaGrub;
