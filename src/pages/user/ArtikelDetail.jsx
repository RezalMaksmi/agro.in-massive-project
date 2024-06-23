import React, { useEffect } from "react";
import Artikel1 from "./../../assets/artikel/artikel1.png";
import Artikel3 from "./../../assets/artikel/artikel3.jpg";
import Artikel4 from "./../../assets/artikel/artikel4.png";
import Artikel6 from "./../../assets/artikel/artikel6.png";
import Artikel7 from "./../../assets/artikel/artikel7.png";
import Artikel8 from "./../../assets/artikel/artikel8.png";
import Artikel9 from "./../../assets/artikel/artikel9.png";
import Iklan1 from "./../../assets/artikel/iklan1.png";
import Iklan2 from "./../../assets/artikel/iklan2.png";
import { Link, useParams } from "react-router-dom";
import { MainArtikel } from "./Artikel";
import TemplateLogin from "../../template/TemplateLogin";
import Line from "./../../components/atoms/Line";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct, getAPIActDetail } from "../../redux/featch/getData";
import { Loading } from "../../components/moleculs";
import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  parseISO,
} from "date-fns";

const extractTimestamp = (timestampStr) => {
  const timestamp = parseISO(timestampStr);
  const year = getYear(timestamp);
  const month = getMonth(timestamp) + 1; // getMonth() returns 0-11, so we add 1
  const day = getDate(timestamp);
  const hour = getHours(timestamp);
  const minute = getMinutes(timestamp);
  return {
    year,
    month,
    day,
    hour,
    minute,
  };
};

const ChildArtikel = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.get);

  useEffect(() => {
    dispatch(getAPIAct(`${process.env.API_URL}/artikel`));
  }, []);

  return (
    <div className="flex flex-col items-center sm:items-start sm:mx-8">
      {data ? (
        data.map((news, i) => (
          <Link
            to={`/artikel/${news.slug}`}
            className="flex flex-row w-full max-w-sm gap-x-4 mb-7"
            key={i}
          >
            <img
              src={`${process.env.API_URL}/assets/images/${news.featured_image}`}
              alt={news.title}
              className="w-24 h-24 object-cover rounded-2xl"
            />
            <div className="ml-3 flex flex-col justify-between">
              <div className="text-[12px] font-bold hover:text-gray-700">
                {news.title}
              </div>
              <p className="  text-[9px]">{news.summary}</p>
              <p className="text-xs font-thin text-gray-500">
                {extractTimestamp(news.created).day +
                  "-" +
                  extractTimestamp(news.created).month +
                  "-" +
                  extractTimestamp(news.created).year +
                  "    " +
                  extractTimestamp(news.created).hour +
                  ":" +
                  extractTimestamp(news.created).minute}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <>Loading...</>
      )}
      <div className="w-full h-max bg-gray-300 rounded-md p-3">
        <p className="text-[20px] font-light text-gray-500 text-center py-3">
          ADVERTISEMENT
        </p>
        <div className="w-full">
          <img src={Iklan1} alt="Advertisement 1" className="w-full" />
          <img src={Iklan2} alt="Advertisement 2" className="w-full mt-3" />
        </div>
      </div>
    </div>
  );
};

export const ArtikelDetail = () => {
  const lineStyle = {
    height: "690px",
    border: "1px solid #807D7E",
    width: "2px",
  };
  const horizStyle = {
    height: "2px",
    width: "100%",
    border: "1px solid #807D7E",
    marginTop: "50px",
  };
  const { slug } = useParams();
  console.log(slug);

  const dispatch = useDispatch();
  const { detail, status, error } = useSelector((state) => state.get);

  useEffect(() => {
    dispatch(getAPIActDetail(`${process.env.API_URL}/artikel/${slug}`));
  }, [slug]);
  console.log(detail);
  return (
    <TemplateLogin>
      {detail ? (
        detail.map((news, index) => (
          <div
            className="py-32 min-h-screen flex flex-col sm:flex-row justify-center items-start"
            key={index}
          >
            <div className="flex flex-col gap-y-4 px-4 sm:px-32 w-full sm:w-[60%]">
              <img
                src={`${process.env.API_URL}/assets/images/${news.featured_image}`}
                alt={news.title}
                className="w-full h-72 object-cover  rounded-lg"
              />
              <p className="text-[12px] text-gray-500">
                {extractTimestamp(news.created).day +
                  "-" +
                  extractTimestamp(news.created).month +
                  "-" +
                  extractTimestamp(news.created).year +
                  "    " +
                  extractTimestamp(news.created).hour +
                  ":" +
                  extractTimestamp(news.created).minute}
              </p>
              <p className="text-sm text-justify leading-loose whitespace-pre-line">
                {news.content}
              </p>

              <Line style={horizStyle} />
              <h2 className="text-[32px] sm:text-[48px] font-bold mt-8">
                Berita Lainnya
              </h2>
              <MainArtikel className="mt-4" />
            </div>
            <div className="hidden sm:block">
              <Line style={lineStyle} />
            </div>
            <ChildArtikel />
          </div>
        ))
      ) : status == "loading" ? (
        <Loading />
      ) : (
        ""
      )}
    </TemplateLogin>
  );
};
