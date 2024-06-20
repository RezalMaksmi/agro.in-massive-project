import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import petani from "../../assets/info-img.jpg";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { CardDiskusi, FormDiskusi } from "../../components/atoms";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import hasna from "../../assets/tim/hasna.png";
import TemplateLogin from "../../template/TemplateLogin";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../../redux/featch/getData";
import { getPostsAPIAct, postPostsAPIAct } from "../../redux/featch/Posts";
import { format } from "date-fns";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const ForumDiskusi = () => {
  const [selectedMenu, setSelectedMenu] = useState("question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("question");
  const [img, setImg] = useState();
  const [space_id, setSpace_id] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

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

  const { user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.posts);

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const response = await axiosInstance.post(
        `${process.env.API_URL}/utils/image-upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      fetchData();
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
    dispatch(postPostsAPIAct({ title, description, type, img, space_id }));
    fetchData();
    setTitle("");
    setDescription("");
  };

  const fetchData = () => {
    dispatch(getPostsAPIAct(`posts`));
  };

  useEffect(() => {
    setImg(selectedFile.name);
    fetchData();
  }, [selectedFile]);

  // console.log(user);

  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col w-full gap-6 ">
          <div className="rounded-xl bg-primary flex flex-col md:gap-5 gap-3 md:py-6 py-3 md:px-4 px-2">
            {/* Profil */}
            <div className="flex flex-row md:gap-4 gap-2 items-center">
              <img
                src={`
                ${
                  user && user.img != null
                    ? `${process.env.API_URL}/public/images/${user.img}`
                    : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                }`}
                alt="profil"
                className="w-10 h-10 bg-pink-600 rounded-full object-cover "
              />
              <div className="flex flex-col  text-white">
                <h1 className="md:text-xl text-base font-bold">
                  {user ? user.username : ""}
                </h1>
                <span className="md:text-base text-xs">
                  {user ? user.job : ""}
                </span>
              </div>
            </div>
            {/* pertanyaan */}
            <div className="w-full border-2 border-dark_10 rounded-full md:p-1 p-[2px] grid grid-cols-2">
              <button
                onClick={() => handleMenuClick("question")}
                className={` ${
                  selectedMenu === "question"
                    ? "bg-white text-primary"
                    : "  text-white scale-95"
                } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
              >
                Pertanyaan
              </button>
              <button
                onClick={() => handleMenuClick("information")}
                className={` ${
                  selectedMenu === "information"
                    ? "bg-white text-primary"
                    : "  text-white scale-95"
                } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
              >
                Buat Informasi
              </button>
            </div>
            {/* form */}

            <FormDiskusi
              type={selectedMenu}
              title={(e) => setTitle(e.target.value)}
              titleValue={title}
              description={(e) => setDescription(e.target.value)}
              descriptionValue={description}
              submit={handleSubmit}
              selectFile={handleFileChange}
              handleIconClick={handleIconClick}
              fileInputRef={fileInputRef}
            />
            {/*  */}
          </div>

          {data &&
            data.map((item, i) => {
              return (
                <Link
                  key={i}
                  // to={`detail/pertanyaan/${item.id}`}
                  to={`/diskusi/detail/${item.type}/${item.id}`}
                  className="bg-white"
                >
                  <CardDiskusi
                    type="Postingan"
                    typePost={item.type}
                    imgProfil={`
                    ${
                      item.author_image !== null
                        ? `${process.env.API_URL}/public/images/${item.author_image}`
                        : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                    }`}
                    name={item.username}
                    about={item.job}
                    title={item.title}
                    description={item.description}
                    imgPost={`${process.env.API_URL}/public/images/${item.img}`}
                    date={
                      item
                        ? format(new Date(item.created_at), "yyyy-MM-dd HH:mm")
                        : ""
                    }
                    likeUp="200"
                    comment="300"
                    answer={item.comment_count}
                  />
                </Link>
              );
            })}
        </div>
      </ForumDiskusiTemplate>
    </TemplateLogin>
  );
};

export default ForumDiskusi;
