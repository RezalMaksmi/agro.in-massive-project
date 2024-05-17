import React, { useEffect, useState } from "react";
// import artikel from "../../assets/layanan4.jpg";
import axios from "axios";

const Artikel = ({ className, TextColor }) => {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [article, setArticle] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const article = await axios(
          `https://api.buttercms.com/v2/posts/?page=1&page_size=3&auth_token=33c1ecd6ea5a7bd37a873ea78302634597018be7`
        );
        setArticle(article.data.data);
      } catch (error) {
        setError(true);
      }
      setLoader(false);
    };

    loadData();
  }, []);

  if (error) return <>eror</>;
  if (loader) return <>Loading...</>;

  console.log(article);
  return (
    <div
      id="artikel"
      className={`h-auto md:px-20 px-5 md:pb-36 pb-20  md:py-24 py-12  mx-auto flex flex-col justify-center items-start bg-[#1A3D37] ${className}`}
    >
      <div className="container flex flex-col justify-center items-start mx-auto md:gap-16 gap-10">
        <div className={`flex flex-col gap-2  ${TextColor}`}>
          <h1 className="md:text-5xl text-2xl font-bold">Artikel</h1>
          <span>Kumpulan berita terbaru di sekitar Pertanian</span>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6 gap-4 w-auto mx-auto ">
          {article ? (
            article.map((item, i) => {
              return (
                <div
                  key={i + 1}
                  className=" flex flex-col rounded-lg bg-[#fff] max-h-[355px] md:min-h-[355px] min-h-[155px] h-full  overflow-hidden cursor-pointer"
                >
                  <div className="group/item h-full flex md:flex-col flex-row rounded-lg bg-[#fff] overflow-hidden relative transform transition-all duration-500">
                    <div className="md:h-[99px] h-full md:group-hover/item:h-full w-full overflow-hidden transform transition-all duration-500 md:group-hover/item:relative">
                      <img
                        src={item.featured_image}
                        alt=""
                        className="object-cover w-full h-full transform transition-all duration-500 "
                      />
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1 md:px-6 px-2 md:py-6 py-2 md:group-hover/item:absolute md:group-hover/item:w-full md:group-hover/item:bg-[#000000]  md:group-hover/item:bg-opacity-65 md:group-hover/item:text-[#fff] top-0 bottom-0 transform transition-all duration-300 md:group-hover/item:justify-center md:group-hover/item:h-full">
                      <h1 className="md:text-2xl text-base md:font-bold font-semibold ">
                        {item.title}
                      </h1>
                      <span className="md:text-base text-xs ">
                        Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan
                        Aceh kembali menggelar pasar tani pada tahun ini.
                        Ratusan...
                      </span>
                      <a
                        href=""
                        className="md:py-4 py-2 md:text-base text-sm text-end"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>Mengambil data...</>
          )}

          {/* <div className=" flex flex-col rounded-lg bg-[#fff] overflow-hidden">
            <div className="h-[70px] w-full overflow-hidden">
              <img src={artikel} alt="" className="object-cover w-full" />
            </div>
            <div className="flex flex-col gap-2 px-6 py-6">
              <h1 className="text-2xl font-bold">
                Suhu Udara Tinggi, Kegiatan Pertanian Turun
              </h1>
              <span className="">
                Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan Aceh
                kembali menggelar pasar tani pada tahun ini. Ratusan masyarakat
                antusias menyerbu
              </span>
              <a href="" className="py-4 text-end">
                Read More
              </a>
            </div>
          </div>

          <div className=" flex flex-col rounded-lg bg-[#fff] overflow-hidden">
            <div className="h-[70px] w-full overflow-hidden">
              <img src={artikel} alt="" className="object-cover w-full" />
            </div>
            <div className="flex flex-col gap-2 px-6 py-6">
              <h1 className="text-2xl font-bold">
                Apakah Makan Organik Benar-benar Sehat?
              </h1>
              <span className="">
                Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan Aceh
                kembali menggelar pasar tani pada tahun ini. Ratusan masyarakat
                antusias menyerbu
              </span>
              <a href="" className="py-4 text-end">
                Read More
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
