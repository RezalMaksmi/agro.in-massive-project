import React, { useEffect, useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { Await, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getExploreAPIAct,
  getAPIActDiskusiSpacesFollow,
  getAPIActDiskusiSpacesfollowing,
  deleteAPIActDiskusiSpaces,
  getAPIActDiskusiSpacesUnFollow,
} from "../../redux/featch/Spaces";
import PopUp from "../../components/atoms/PopUp";

const ForumDiskusiJelajahRuang = () => {
  const dispatch = useDispatch();
  const [followBtn, setFollowBtn] = useState(null);
  const { explore, following, data } = useSelector((state) => state.spaces);
  const { user } = useSelector((state) => state.auth);
  // const {  } = useSelector((state) => state.post);
  const [popupFollow, setPopupFollow] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const [follow, setFollow] = useState([]);
  const [unFollow, setUnFollow] = useState([]);
  const [dataToMatch, setDataToMatch] = useState([]);
  const [dataList, setDataList] = useState([]);
  const criteriaList = dataList;

  const followAct = (id) => {
    dispatch(getAPIActDiskusiSpacesFollow(`spaces/${id}/followers`));
    navigate("/diskusi/ruang");
    getData();
  };

  const unfollowAct = (id) => {
    dispatch(getAPIActDiskusiSpacesUnFollow(`spaces/${id}/followers`));
    getData();
  };
  // Fungsi untuk mencocokkan data
  // useEffect(() => {
  //   dispatch(getExploreAPIAct(`spaces`));
  //   dispatch(getAPIActDiskusiSpacesfollowing(`spaces?filter=following`));
  //   explore ? setDataToMatch(explore.spaces) : "";
  //   following ? setDataList(following) : "";

  //   matchData();
  // }, [id, dataList, dataToMatch, criteriaList, data, dispatch]);

  const matchData = () => {
    if (!dataToMatch || (!Array.isArray(dataToMatch) && !dataList)) {
      console.error("dataToMatch is not defined or not an array");
      return;
    }

    const follow = dataToMatch.filter((item) =>
      dataList.some((item2) =>
        Object.keys(item2).every((key) => item[key] === item2[key])
      )
    );

    const unFollow = dataToMatch.filter(
      (item) =>
        !dataList.some((item2) =>
          Object.keys(item2).every((key) => item[key] === item2[key])
        )
    );

    // Simpan data yang cocok ke dalam state
    setFollow(follow);
    setUnFollow(unFollow);
    return;
  };

  // console.log(dataToMatch ? dataToMatch : "");
  // console.log(dataList);
  // console.log("apa hasilnya", follow);
  // console.log("pppppppppppppppp", unFollow);

  const closeModalFollow = () => {
    setPopupFollow(!popupFollow);
    setId(null);
  };

  const confirmFollow = () => {
    console.log(`Follow item: ${id}`);

    dispatch(deleteAPIActDiskusiSpaces(`spaces/${id}/followers`));
    closeModalFollow();
  };

  // useEffect(() => {
  //   dispatch(getExploreAPIAct(`spaces`));
  //   dispatch(getAPIActDiskusiSpacesfollowing(`spaces?filter=following`));
  //   setDataToMatch(explore ? explore.spaces : "");
  //   setDataList(following ? following : "");
  //   matchData();
  // }, [id, dataList, dataToMatch, criteriaList, data, dispatch]);

  const getData = () => {
    dispatch(getExploreAPIAct(`spaces`));
    dispatch(getAPIActDiskusiSpacesfollowing(`spaces?filter=following`));
  };

  useEffect(() => {
    getData();
    console.log("Data diupdate:", data);
  }, [id, dispatch]);

  console.log("explorenya apa ", explore);
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        {popupFollow ? (
          <PopUp
            type="berhentiIkuti"
            submit={confirmFollow}
            cancel={closeModalFollow}
          />
        ) : (
          ""
        )}
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-3 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
            <h2 className="md:text-xl text-lg font-bold">
              Jelajahi Ruang yang ada
            </h2>
            <div className="flex flex-col gap-2">
              {/* {follow && user ? (
                follow.map((item, i) => {
                  return (
                    <CardDiskusi
                      key={i}
                      type="jelajahRuang"
                      id={item.id}
                      imgProfil={`
                      ${
                        item && item.author_image != null
                          ? `${process.env.API_URL}/assets/images/${item.author_image}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                      title={item.title}
                      description={item.description}
                      follow={() => followAct(item.id)}
                      button="Berhenti Mengikuti"
                      onClick={() => openModalFollow(item.id)}
                      // button={ following.filter(item1 => item.find(item2 => item1.id === item2.id))}
                      className={`${
                        item.user_id == user.id ? "hidden" : "flex"
                      }`}
                    />
                  );
                })
              ) : (
                <div></div>
              )} */}

              {/* {unFollow && user ? (
                unFollow.map((item, i) => {
                  return (
                    <CardDiskusi
                      key={i}
                      type="jelajahRuang"
                      id={item.id}
                      imgProfil={`
                      ${
                        item && item.author_image != null
                          ? `${process.env.API_URL}/assets/images/${item.author_image}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                      title={item.title}
                      description={item.description}
                      follow={() => followAct(item.id)}
                      button="Ikuti"
                      // button={ following.filter(item1 => item.find(item2 => item1.id === item2.id))}
                      className={`${
                        item.user_id == user.id ? "hidden" : "flex"
                      }`}
                    />
                  );
                })
              ) : (
                <div>Jelajah ruang kosong</div>
              )} */}

              {explore ? (
                explore.spaces.map((item, i) => {
                  return (
                    <CardDiskusi
                      key={i}
                      type="jelajahRuang"
                      id={item.id}
                      imgProfil={`
                      ${
                        item && item.author_image != null
                          ? `${process.env.API_URL}/assets/images/${item.author_image}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                      title={item.title}
                      description={item.description}
                      follow={!item.following ? () => followAct(item.id) : ""}
                      unfollow={
                        item.following ? () => unfollowAct(item.id) : ""
                      }
                      button={item.following}
                      // button="Ikuti"

                      // button={ following.filter(item1 => item.find(item2 => item1.id === item2.id))}
                      className={"flex"}
                    />
                  );
                })
              ) : (
                <div>Jelajah ruang kosong</div>
              )}
            </div>
          </div>
        </div>
      </ForumDiskusiTemplate>
    </TemplateLogin>
  );
};

export default ForumDiskusiJelajahRuang;
