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
      className={`h-auto md:px-20 px-10 pb-36  py-24  mx-auto flex flex-col justify-center items-start bg-[#1A3D37] ${className}`}
    >
      <div className="container flex flex-col justify-center items-start mx-auto gap-16">
        <div className={`flex flex-col gap-2  ${TextColor}`}>
          <h1 className="text-5xl font-bold">Artikel</h1>
          <span>Kumpulan berita terbaru di sekitar Pertanian</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 w-auto mx-auto ">
          {article ? (
            article.map((item, i) => {
              return (
                <div
                  key={i + 1}
                  className=" flex flex-col rounded-lg bg-[#fff] max-h-[355px] min-h-[355px] h-full overflow-hidden cursor-pointer"
                >
                  <div className="group/item h-full flex flex-col rounded-lg bg-[#fff] overflow-hidden relative transform transition-all duration-500">
                    <div className="h-[99px] group-hover/item:h-full w-full overflow-hidden transform transition-all duration-500 group-hover/item:relative">
                      <img
                        src={item.featured_image}
                        alt=""
                        className="object-cover w-full h-full transform transition-all duration-500 "
                      />
                    </div>
                    <div className="flex flex-col gap-2 px-6 py-6 group-hover/item:absolute group-hover/item:w-full group-hover/item:bg-[#000000]  group-hover/item:bg-opacity-65 group-hover/item:text-[#fff] top-0 bottom-0 transform transition-all duration-300 group-hover/item:justify-center group-hover/item:h-full">
                      <h1 className="text-2xl font-bold ">{item.title}</h1>
                      <span className="">
                        Pemerintah Aceh melalui Dinas Pertanian dan Perkebunan
                        Aceh kembali menggelar pasar tani pada tahun ini.
                        Ratusan masyarakat antusias menyerbu
                      </span>
                      <a href="" className="py-4 text-end">
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
