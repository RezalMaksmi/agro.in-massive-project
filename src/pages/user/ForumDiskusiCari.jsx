import React, { useEffect, useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { useDispatch, useSelector } from "react-redux";
import { searchPostsAPIAct } from "../../redux/featch/Posts";
import { Link } from "react-router-dom";

const ForumDiskusiCari = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { searching } = useSelector((state) => state.posts);

  const handleSearch = () => {
    dispatch(searchPostsAPIAct(`posts/search?q=${search}`));
  };

  console.log("apa ini su ================", searching);
  useEffect(() => {
    dispatch(searchPostsAPIAct(`posts/search?q=""`));
    setSearch("");
  }, []);
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col gap-5 bg-white rounded-2xl">
          <div className="flex flex-col gap-3 border border-[#ececec] shadow-md py-3 md:px-4 px-2 ">
            {/* Buat Ruang */}
            <div className="flex flex-col gap-3">
              <h2 className="md:text-xl text-lg font-bold">Cari Pertanyaan</h2>
              <div className="flex flex-row md:gap-3 gap-2 md:text-base text-sm">
                <input
                  type="text"
                  placeholder="Ketik Pertanyaan..."
                  onChange={(e) => setSearch(e.target.value)}
                  className="py-2 px-3 border-2 border-dark_20 w-full rounded-full"
                />
                <Button
                  type="PrimaryButton"
                  text="Cari"
                  onClick={handleSearch}
                />
              </div>
              {search ? (
                <span className="md:text-xl text-base">
                  Hasil dari pencarian "{search}"
                </span>
              ) : (
                <span></span>
              )}
            </div>

            {/* item card */}
            <div className="">
              {searching ? (
                searching.map((item, i) => {
                  return (
                    <Link
                      to={`/diskusi/detail/${item.type}/${item.id}`}
                      key={i}
                    >
                      <CardDiskusi
                        type="pencarian"
                        imgProfil={`
                      ${
                        item.author_image
                          ? `http://localhost:4000/assets/images/${item.author_image}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                        // title="Apa Itu Jagung?"
                        description={item.title}
                        follow={"true"}
                      />
                    </Link>
                  );
                })
              ) : (
                <></>
              )}

              {/* <CardDiskusi
                type="pencarian"
                imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
                title="Shomat"
                description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
                follow={"true"}
              /> */}
            </div>
          </div>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusiCari;
