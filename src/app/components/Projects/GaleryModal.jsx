/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import CloseBtn from "../common/svg/CloseBtn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Modal = (props) => {
  let [pictureNumber, setPictureNumber] = useState(1);
  const handleClick = (param) => {
    if (param === "next") {
      if (pictureNumber < props.pictureNames.length - 1) {
        setPictureNumber(pictureNumber + 1);
      } else {
        setPictureNumber(0);
      }
    } else {
      if (pictureNumber > 0) {
        setPictureNumber(pictureNumber - 1);
      } else {
        setPictureNumber(props.pictureNames.length - 1);
      }
    }
  };
  return (
    <div>
      <div
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
          props.isDialogOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[90%] max-w-4xl rounded-lg bg-white shadow-2xl transition-all duration-300 ${
            props.isDialogOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-28 scale-90"
          }`}
        >
          <div className="flex w-full h-8 border-b-[1px]  ">
            <div className="w-full flex justify-start ml-2 italic text-xs items-center ">
              {props.projectName}
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={props.handleCloseDialog}
                className="w-8 h-8 flex justify-center items-center "
              >
                <CloseBtn />
              </button>
            </div>
          </div>
          <div className="relative">
            <button className="ml-2 absolute top-20 left-0 border-[1px] border-solid border-black  rounded-full  shadow-lg bg-white bg-opacity-50 ">
              {" "}
              <GrFormPrevious
                onClick={() => {
                  handleClick("prev");
                }}
              />
            </button>
            <button className="mr-2 absolute top-20 right-0  border-[1px] border-solid border-black  rounded-full  shadow-lg bg-white bg-opacity-50">
              <GrFormNext
                onClick={() => {
                  handleClick("next");
                }}
              />
            </button>
            <img
              className="w-auto h-auto max-w-full max-h-[calc(100vh-80px)]"
              src={props.picturePath + props.pictureNames[pictureNumber]}
              alt="Datafirst"
            />
          </div>
          <div className="w-full flex ml-2 h-8 italic border-t-[1px] text-[10px] items-center ">
            {props.projectDesc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
