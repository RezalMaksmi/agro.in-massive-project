import React, { useEffect, useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import PopUp from "../../components/atoms/PopUp";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteAPIActDiskusiSpaces,
  getAPIActDiskusiSpacesOwned,
  getAPIActDiskusiSpacesfollowing,
} from "../../redux/featch/Spaces";
import { Loading } from "../../components/moleculs";

const ForumDiskusiRuang = () => {
  const [Follow, setFollow] = useState(false);
  const [popupHapus, setPopupHapus] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const { owned, following, data, status } = useSelector(
    (state) => state.spaces
  );

  const openModal = (item) => {
    setId(item);
    setPopupHapus(!popupHapus);
  };

  const closeModal = () => {
    setPopupHapus(!popupHapus);
    setId(null);
  };

  const confirmDelete = () => {
    dispatch(deleteAPIActDiskusiSpaces(`spaces/${id}`));
    fetchData();
    setPopupHapus(false);
  };

  const openModalFollow = (item) => {
    setId(item);
    console.log("idnya apa ini", item);
    setFollow(!Follow);
  };

  const closeModalFollow = () => {
    setFollow(!Follow);
    setId(null);
  };

  const confirmFollow = () => {
    console.log(`Follow item: ${id}`);

    dispatch(deleteAPIActDiskusiSpaces(`spaces/${id}/followers`));
    fetchData();
    closeModalFollow();
  };

  const fetchData = () => {
    dispatch(getAPIActDiskusiSpacesOwned(`spaces?filter=owned`));
    dispatch(getAPIActDiskusiSpacesfollowing(`spaces?filter=following`));
  };

  useEffect(() => {
    fetchData();
  }, [data, id]);

  const userData = localStorage.getItem("user");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck ? userCheck : "";

  console.log("follow", following);

  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
            {/* Buat Ruang */}
            <h2 className="text-xl font-bold">Ruang Anda {id}</h2>

            {/* item card */}
            <div className="">
              {owned && owned.length === 0 ? (
                <p>Anda belum membuat ruang</p>
              ) : owned ? (
                owned.map((items, i) => {
                  return (
                    <CardDiskusi
                      key={i}
                      type="Ruang"
                      id={items.id}
                      imgProfil={`
                      ${
                        user && (user.img != null) & (user.img !== "")
                          ? `${process.env.API_URL}/assets/images/${user.img}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                      name={items.title}
                      description={items.description}
                      follow={true}
                      onClick={() => openModal(items.id)}
                    />
                  );
                })
              ) : (
                <Loading type={"cardForum"} />
              )}
            </div>
          </div>

          {/* ruang yang diikuti */}
          <div className="flex flex-col gap-2 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
            <h2 className="md:text-xl text-lg font-bold">
              Ruang yang anda ikuti
            </h2>

            {/* item card */}
            <div>
              {following && following.length === 0 ? (
                <p>Anda belum mengikuti ruang</p>
              ) : following ? (
                following.map((items, i) => {
                  return (
                    <CardDiskusi
                      key={i}
                      type="Ruang"
                      id={items.id}
                      imgProfil={`
                      ${
                        items.author_image !== null
                          ? `${process.env.API_URL}/assets/images/${items.author_image}`
                          : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                      }`}
                      // name="Mega Lodon"
                      name={items.title}
                      description={items.description}
                      follow={false}
                      onClick={() => openModalFollow(items.id)}
                    />
                  );
                })
              ) : (
                <Loading type={"cardForum"} />
              )}
            </div>
          </div>
        </div>
        {Follow ? (
          <PopUp
            type="berhentiIkuti"
            submit={confirmFollow}
            cancel={closeModalFollow}
          />
        ) : (
          ""
        )}
        {popupHapus ? (
          <PopUp type="hapusRuang" submit={confirmDelete} cancel={closeModal} />
        ) : (
          ""
        )}
      </ForumDiskusiTemplate>
    </TemplateLogin>
  );
};

export default ForumDiskusiRuang;
