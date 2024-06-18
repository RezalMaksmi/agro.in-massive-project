import React, { useEffect, useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import logo from "../../assets/bg_detail-ruang.jpg";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { FormPostingan } from "../../components/moleculs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActDetail } from "../../redux/featch/Spaces";
import { getPostsAPIAct, postPostsAPIAct } from "../../redux/featch/Posts";
import { toast } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";

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

  const [selectedMenu, setSelectedMenu] = useState("question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("question");
  const [img, setImg] = useState("");
  const [space_id, setSpace_id] = useState(null);
  const [selectedFile, setSelectedFile] = useState("null");

  // console.log("id nya berapa", idToFind);
  // console.log("apa datanyaa : ", filteredData ? filteredData : "");
  console.log("apa detailnya", detail ? detail : "");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    if (menu === "question") {
      setType("question");
      setSelectedMenu("question");
    } else {
      setType("information");
      setSelectedMenu("information");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);

    console.log(img);
    try {
      const response = await axiosInstance.post(
        "http://localhost:4000/utils/image-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      toast.success(`${response.data.message}`, {
        position: "bottom-right",
      });
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
    // const newData = { title, description, type, img, space_id };
    dispatch(postPostsAPIAct({ title, description, type, img, space_id }));
    fetchData();
    setTitle("");
    setDescription("");
  };

  const fetchData = () => {
    dispatch(getAPIActDetail(`spaces/${id}`));
    dispatch(getPostsAPIAct(`posts`));
    detail && detail.space.is_owned === true ? setOpenModal(true) : "";
    detail && detail.space.following === true ? setOpenModal(true) : "";
  };

  useEffect(() => {
    // filterById(idToFind);
    setIdToFind(id);
    setImg(selectedFile.name);
    // detail && detail.space.following ? setOpenModal(true) : setOpenModal(false);
    fetchData();
    setSpace_id(id);
  }, [id, selectedFile, openModal]);

  console.log("apanih typenya", type);

  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col md:gap-5 gap-3 pb-3">
          <div className="border-[#ececec] shadow-md rounded-2xl bg-white border ">
            <div className="border-[#ececec] shadow-md rounded-2xl overflow-hidden md:h-[400px] h-[320px] relative">
              <img
                src={detail ? `${detail.space.img}` : ""}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col md:gap-4 gap-2 absolute md:px-3 px-2 md:py-5 py-2 right-0 left-0 bottom-0 text-white bg-[#171717] backdrop-blur-lg bg-opacity-40 ">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="md:text-4xl text-base font-bold">
                    {detail ? detail.space.title : ""}
                  </h1>
                  {/* {detail ? (
                    <Button
                      type="PrimaryButton"
                      // text={!openModal ? `Ikuti` : `Berhenti Mengikuti`}
                      // button={item.following}

                      button={detail.space.following}
                      className={
                        !openModal
                          ? "bg-darkGray_20 text-primary"
                          : "bg-secondary py-1 px-2"
                      }
                      onClick={() => setOpenModal(!openModal)}
                    />
                  ) : (
                    ""
                  )} */}
                  {detail && detail.space.following === true ? (
                    <Button
                      onClick={""}
                      type="PrimaryButton"
                      text="Berhenti Mengikuti"
                      className=" bg-secondary hover:bg-[#ca9c45] text-white"
                    />
                  ) : (
                    <Button
                      onClick={""}
                      type="PrimaryButton"
                      text="Ikuti"
                      className="bg-primary hover:bg-[#14312c] text-white"
                    />
                  )}
                </div>
                <span className="md:text-base text-xs">
                  {detail ? detail.space.description : ""}
                </span>
              </div>
            </div>
          </div>
          {/* form */}
          {openModal ? (
            <FormPostingan
              submit={handleSubmit}
              typeQuestion={() => handleMenuClick("question")}
              typeInformation={() => handleMenuClick("information")}
              selectedMenu={type}
              title={(e) => setTitle(e.target.value)}
              titleValue={title}
              description={(e) => setDescription(e.target.value)}
              descriptionValue={description}
              selectFile={handleFileChange}
              idSpace={id}
            />
          ) : (
            <></>
          )}
          <div className=" flex flex-col gap-4 py-3 ">
            {/* card  */}
            {detail &&
              detail.space.posts.map((item, i) => {
                return (
                  <Link
                    key={i}
                    // to={`detail/pertanyaan/${item.id}`}
                    to={`/diskusi/detail/${item.type}/${item.id}`}
                    className="bg-white"
                  >
                    <CardDiskusi
                      key={i}
                      typePost={item.type}
                      type="detailRuang"
                      title={item.title}
                      imgPost={`http://localhost:4000/assets/images/${item.img}`}
                      description={item.description}
                      answer={item.comment_count}
                    />
                  </Link>
                  // <span key={i}>{item.title}</span>
                );
              })}

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
