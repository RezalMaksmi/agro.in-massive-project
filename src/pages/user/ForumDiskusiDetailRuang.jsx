import React, { useEffect, useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import logo from "../../assets/bg_detail-ruang.jpg";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { FormPostingan } from "../../components/moleculs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActDetail } from "../../redux/featch/Spaces";
import { getPostsAPIAct } from "../../redux/featch/Posts";

const ForumDiskusiDetailRuang = () => {
  const [openModal, setOpenModal] = useState(false);
  // State untuk menyimpan ID yang dicari dan data yang difilter
  const [filteredData, setFilteredData] = useState();
  const [idToFind, setIdToFind] = useState();
  const { id } = useParams();

  const dispatch = useDispatch();
  const [followBtn, setFollowBtn] = useState(false);

  const { detail } = useSelector((state) => state.spaces);
  const { data } = useSelector((state) => state.posts);

  // Fungsi untuk memfilter data berdasarkan ID
  // const filterById = (id) => {
  const dataResult = data
    ? data.filter((entry) => entry.space_id === parseInt(id))
    : "";
  // console.log("apa ya iniiiiiiii", dataResult);
  //   setFilteredData(result);
  // };

  // Memanggil fungsi filter ketika komponen pertama kali di-render
  //useEffect(() => {
  //  filterById(idToFind);
  //}, [idToFind]);

  useEffect(() => {
    // filterById(idToFind);
    setIdToFind(id);
    detail ? (detail.space.is_owned === true ? setOpenModal(true) : "") : "";
    dispatch(getAPIActDetail(`spaces/${id}`));
    dispatch(getPostsAPIAct(`posts`));
  }, [id]);

  // console.log("id nya berapa", idToFind);
  // console.log("apa datanyaa : ", filteredData ? filteredData : "");
  console.log("apa detailnya", detail ? detail : "");
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col md:gap-5 gap-3 pb-3">
          <div className="border-[#ececec] shadow-md rounded-2xl bg-white border ">
            <div className="border-[#ececec] shadow-md rounded-2xl overflow-hidden md:h-[400px] h-[320px] relative">
              <img src={logo} alt="" className="w-full h-full object-cover" />
              <div className="flex flex-col md:gap-4 gap-2 absolute md:px-3 px-2 md:py-5 py-2 right-0 left-0 bottom-0 text-white bg-[#171717] backdrop-blur-lg bg-opacity-40 ">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="md:text-4xl text-base font-bold">
                    {detail ? detail.space.title : ""}
                  </h1>
                  {detail ? (
                    detail.space.is_owned ? (
                      ""
                    ) : (
                      <Button
                        type="PrimaryButton"
                        text={!openModal ? `Ikuti` : `Berhenti Mengikuti`}
                        className={
                          !openModal
                            ? "bg-darkGray_20 text-primary"
                            : "bg-secondary py-1 px-2"
                        }
                        onClick={() => setOpenModal(!openModal)}
                      />
                    )
                  ) : (
                    ""
                  )}
                </div>
                <span className="md:text-base text-xs">
                  {detail ? detail.space.description : ""}
                </span>
              </div>
            </div>
          </div>
          {/* form */}
          {openModal ? <FormPostingan /> : <></>}
          <div className=" flex flex-col gap-4 py-3 ">
            {/* card  */}
            {dataResult ? (
              dataResult.map((item, i) => {
                return (
                  <CardDiskusi
                    key={i}
                    type="detailRuang"
                    title={item.title}
                    description={item.description}
                  />
                  // <span key={i}>{item.title}</span>
                );
              })
            ) : (
              <div>Ruang belum ada diskusi</div>
            )}

            {/* {data.map((item, i) => {
              return <span key={i}>{item.title}</span>;
            })} */}
          </div>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusiDetailRuang;
