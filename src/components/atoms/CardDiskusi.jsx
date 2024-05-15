import React from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Button from "./Button";

const CardDiskusi = (props) => {
  const {
    onClick,
    className,
    type,
    name,
    about,
    title,
    description,
    imgPost,
    likeUp,
    comment,
    imgProfil,
    follow,
    typePost,
  } = props;
  switch (type) {
    case "Postingan":
      return (
        <>
          {typePost == "pertanyaan" ? (
            <div className="rounded-t-xl  flex flex-col gap-5 py-6 px-4">
              {/* Profil */}

              <div className="flex flex-row gap-4 items-center">
                <img
                  src={imgProfil}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover "
                />
                <div className="flex flex-col  text-black">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <span className="text-base">{about}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold">{title}</h1>
                <div className="text-base">{description}</div>
                <img
                  src={imgPost}
                  alt=""
                  className="object-cover w-full rounded-md"
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-2 items-center text-dark_30 border-2 border-dark_20 px-2 rounded-full text-lg">
                  <AiFillUpCircle className="text-xl" />
                  <span>{likeUp}</span>
                  <AiFillDownCircle className="text-xl" />
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <BiCommentDetail />
                  <span className="">{comment}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-t-xl  flex flex-col gap-5 py-6 px-4">
              {/* Profil */}

              <div className="flex flex-row gap-4 items-center">
                <img
                  src={imgProfil}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover "
                />
                <div className="flex flex-col  text-black">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <span className="text-base">{about}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-base">{description}</div>
                <img
                  src={imgPost}
                  alt=""
                  className="object-cover w-full rounded-md"
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-2 items-center text-dark_30 border-2 border-dark_20 px-2 rounded-full text-lg">
                  <AiFillUpCircle className="text-xl" />
                  <span>{likeUp}</span>
                  <AiFillDownCircle className="text-xl" />
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <BiCommentDetail />
                  <span className="">{comment}</span>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case "Comment":
      return (
        <div className="px-3 py-6">
          {/* Profil */}
          <div className="flex flex-row gap-4  w-full items-start">
            <img
              src={imgProfil}
              alt=""
              className="w-10 h-10 bg-pink-600 rounded-full object-cover col-span-1 "
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col  text-dark_30 col-span-2 w-full ">
                <h1 className="text-xl font-bold">{name}</h1>
                <span className="text-sm">{about}</span>
              </div>
              <span>{description}</span>
              <div className="">
                <div className="w-max flex flex-row gap-2 items-center text-dark_30  rounded-full text-lg">
                  <AiFillUpCircle className="text-xl" />
                  <span>{likeUp}</span>
                  <AiFillDownCircle className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "Ruang":
      return (
        <div className="flex flex-row gap-4  w-full items-start border-t-2 py-4 ">
          <img
            src={imgProfil}
            alt=""
            className="w-10 h-10 bg-pink-600 rounded-full object-cover col-span-1 "
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col  text-dark_30 col-span-2 w-full ">
              <h1 className="text-xl font-bold">{name}</h1>
              <span className="text-sm">{about}</span>
            </div>
            <span>{description}</span>
            <div className="w-full">
              <div className="flex flex-row gap-2 items-center justify-end  text-dark_30  w-full text-lg">
                {follow == "true" ? (
                  <Button
                    onClick={onClick}
                    type="PrimaryButton"
                    text="Hapus Ruang"
                    className=" text-white bg-[#ca3737] hover:bg-[#9c2f2f]"
                  />
                ) : (
                  <Button
                    type="PrimaryButton"
                    text="Berhenti Mengikuti"
                    className="bg-secondary hover:bg-[#ca9c45] text-white"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    case "pencarian":
      return (
        <div className="flex flex-row gap-4  w-full items-start border-t-2 py-4 ">
          <img
            src={imgProfil}
            alt=""
            className="w-10 h-10 bg-pink-600 rounded-full object-cover col-span-1 "
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="">
              <h1 className="text-lg font-bold">{title}</h1>
              <span>{description}</span>
            </div>
            <div className="w-full">
              <div className="flex flex-row gap-2 items-center justify-end  text-dark_30  w-full text-lg">
                <Button
                  onClick={onClick}
                  type="PrimaryButton"
                  text="Hapus Ruang"
                  className=" text-white bg-primary hover:bg-primary"
                />
              </div>
            </div>
          </div>
        </div>
      );
    case "jelajahRuang":
      return (
        <div className="flex flex-row gap-4  w-full items-start border-t-2 py-4 ">
          <img
            src={imgProfil}
            alt=""
            className="w-10 h-10 bg-pink-600 rounded-full object-cover col-span-1 "
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="">
              <h1 className="text-lg font-bold">{title}</h1>
              <span>{description}</span>
            </div>
            <div className="flex flex-row gap-2 items-center justify-end  text-dark_30  w-full text-lg">
              <Button
                onClick={onClick}
                type="PrimaryButton"
                text="Ikuti"
                className=" text-white bg-primary hover:bg-dark_30"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <div className=""></div>;
  }
};

export default CardDiskusi;
