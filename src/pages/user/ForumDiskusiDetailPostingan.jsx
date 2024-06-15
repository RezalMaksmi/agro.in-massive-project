import React, { useEffect, useState } from "react";
import { CardDiskusi } from "../../components/atoms";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { IoMdSend } from "react-icons/io";
import TemplateLogin from "../../template/TemplateLogin";
import {
  commentPostsAPIAct,
  getPostsAPIActComments,
  getPostsAPIActDetail,
  likeDownPostsAPIAct,
  likeUpPostsAPIAct,
} from "../../redux/featch/Posts";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const ForumDiskusiDetailPostingan = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [idP, setIdP] = useState();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getPostsAPIActDetail(`posts/${id}`));
    dispatch(getPostsAPIActComments(id));
    setIdP(id);
  }, [id, idP]);
  const { data, detail, comments } = useSelector((state) => state.posts);

  console.log("isinya apa nih idnya: ", id);
  console.log("isinya apa nih detail: ", detail);

  const userData = localStorage.getItem("user");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck ? userCheck : "";

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!text) {
      toast.error("Komentar tidak boleh kosong!", {
        position: "bottom-right",
      });
      return;
    }

    dispatch(commentPostsAPIAct({ id, text }));
    setText("");
    fetchData();
  };

  const likeUp = (idComment) => {
    console.log(idComment);
    dispatch(likeUpPostsAPIAct({ id, idComment }));
    fetchData();
  };

  const likeDown = (idComment) => {
    console.log(idComment);
    dispatch(likeDownPostsAPIAct({ id, idComment }));
    fetchData();
  };

  const fetchData = () => {
    dispatch(getPostsAPIActDetail(`posts/${id}`));
    dispatch(getPostsAPIActComments(id));
  };

  useEffect(() => {
    fetchData();
  }, [id, idP, text]);
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="bg-white">
          <CardDiskusi
            type="Postingan"
            variant="detail"
            typePost="information"
            imgProfil={`
            ${
              detail && detail.author.img
                ? `http://localhost:4000/assets/images/${detail.author.img}`
                : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
            }`}
            name={detail ? detail.author.name : ""}
            about={detail ? detail.author.job : ""}
            title={detail ? detail.title : ""}
            description={detail ? detail.description : ""}
            imgPost={`http://localhost:4000/assets/images/${
              detail ? detail.img : ""
            }`}
            date={
              detail ? format(new Date(detail.created_at), "yyyy-MM-dd") : ""
            }
            answer={detail ? detail.comment_count : ""}
            likeUp="200"
          />

          <div className="flex flex-col  ">
            <div className="w-full h-auto bg-darkGray_20 p-3">
              <div className="flex flex-row gap-3 items-center">
                <img
                  src={`
                  ${
                    user.img !== null
                      ? `http://localhost:4000/assets/images/${user.img}`
                      : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                  }`}
                  alt=""
                  className="w-10 h-10 bg-pink-600 rounded-full object-cover "
                />
                <input
                  type="text"
                  className="py-2 px-3 text-lg rounded-full border w-full outline-0 focus:outline-0"
                  placeholder="Tulis Jawaban..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSubmitComment}>
                  <IoMdSend className="text-4xl" />
                </button>
              </div>
            </div>

            {comments ? (
              comments.map((item, i) => {
                return (
                  <CardDiskusi
                    key={i}
                    type="Comment"
                    imgProfil={`
                    ${
                      item.user.img
                        ? `http://localhost:4000/assets/images/${item.user.img}`
                        : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                    }`}
                    name={item.user.name}
                    about={item.user.job}
                    text={item.text}
                    likeUpAct={() => likeUp(item.id)}
                    likeUp={item.vote.up}
                    likeDownAct={() => likeDown(item.id)}
                    likeDown={item.vote.down}
                  />
                );
              })
            ) : (
              <>belum ada komentar</>
            )}
          </div>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusiDetailPostingan;
