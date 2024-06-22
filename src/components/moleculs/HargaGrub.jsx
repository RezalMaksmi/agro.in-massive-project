import React, { useEffect, useState } from "react";
import CardHargaPangan from "../atoms/CardHargaPangan";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchable from "react-searchable-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getFoodPricesAPIAct } from "../../redux/featch/getData";
import Loading from "./Loading";

const HargaGrub = ({ full }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [jenisDataValue, setJenisDataValue] = useState("");

  const dispatch = useDispatch();
  const [startDate, endDate] = dateRange;
  const { foodPrices, status } = useSelector((state) => state.get);

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
    return `${year}-${month}-${"01"}`;
  };
  const currentDate = new Date();

  const fetchData = () => {
    dispatch(
      getFoodPricesAPIAct(
        `food-prices?type=${
          jenisDataValue ? jenisDataValue : "eceran"
        }&startDate=${
          startDate ? formatDate(startDate) : formatStartDate(currentDate)
        }&endDate=${endDate ? formatDate(endDate) : formatDate(currentDate)}`
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, [jenisDataValue, startDate, endDate, dateRange]);

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

  return (
    <div className="flex flex-col gap-10 w-full">
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
      {/* items */}

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 mb-3">
        {full === true ? (
          foodPrices ? (
            foodPrices.foodPrices.map((items, i) => {
              return (
                <div key={i}>
                  <CardHargaPangan
                    Title={items.name}
                    Img={items.img}
                    Price={items.price}
                  />
                </div>
              );
            })
          ) : (
            <Loading type={"foodPrices"} />
          )
        ) : foodPrices ? (
          foodPrices.foodPrices.slice(0, 8).map((items, i) => {
            return (
              <div key={i}>
                <CardHargaPangan
                  Title={items.name}
                  Img={items.img}
                  Price={items.price}
                />
              </div>
            );
          })
        ) : (
          <Loading type={"foodPrices"} />
        )}
      </div>
      {/* {status == "loading" && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 w-full h-full mb-3">
          <Loading type={"foodPrices"} />
          <Loading type={"foodPrices"} />
          <Loading type={"foodPrices"} />
          <Loading type={"foodPrices"} />
        </div>
      )} */}
    </div>
  );
};

export default HargaGrub;
