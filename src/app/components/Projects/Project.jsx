import Image from "next/image";
import React from "react";
import Badges from "../common/Badges";
import techColors from "../../utils/enums/Badges";
import { useState } from "react";
import GaleryModal from "./GaleryModal";

const Project = (props) => {
  const { Typescript, Sql, Javascript, MongoDb } = techColors;
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="flex flex-row gap-5 justify-center items-center ">
      <div className="relative">
        {/* LES BADGES */}
        <div
          className={`flex flex-col gap-2 absolute top-0 ${
            isHovered ? "-right-[80px]" : "right-0"
          } transition-right  z-0`}
        >
          {props.badges.map((badge, index) => {
            return (
              <Badges
                key={index}
                borderColor={badge.borderColor}
                text={badge.text}
              />
            );
          })}
        </div>

        {/* LES PROJETS */}
        <div
          className="relative w-48 sm:w-72 md:w-96 md:h-72 h-48 border-black border-[1px] border-solid rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_10px_1px_rgba(50,_50,_50,_0.1),_0_10px_20px_rgba(34,_34,_34,_0.5)] overflow-hidden duration-500 z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={props.thumbnail}
            alt={props.thumbnail}
            fill
            className="object-cover hover:blur-sm duration-500"
            priority
          />
          {isHovered ? (
            <div>
              <p
                className={`transition-opacity opacity-100 w-full flex justify-center absolute top-10 left-auto text-center duration-500 text-lg ${props.titleColor}`}
              >
                {props.projectName}
              </p>
              <button
                onClick={handleOpenDialog}
                className="text-sm transition-opacity opacity-100 duration-500 absolute bottom-0 left-0 w-full h-6 bg-black bg-opacity-40 text-white text-center"
              >
                Voir le projet
              </button>
            </div>
          ) : (
            <div>
              <p className="transition-opacity opacity-0 w-full flex justify-center absolute top-10 left-auto text-center duration-500 text-lg">
                {props.projectName}
              </p>
              <button className="text-sm transition-opacity opacity-0 duration-500 absolute bottom-0 left-0 w-full h-6 bg-black bg-opacity-40 text-white text-center">
                Voir le projet
              </button>
            </div>
          )}
        </div>
      </div>
      {/* LA POPUP QUI SOUVRIRA SI ON CLIQUE SUR LE PROJET */}
      <GaleryModal
        isDialogOpen={isDialogOpen}
        projectName={props.projectName}
        handleCloseDialog={handleCloseDialog}
        handleOpenDialog={handleCloseDialog}
        pictureNames={props.pictureNames}
        picturePath={props.picturePath}
        projectDesc={props.projectDesc}
      />
    </div>
  );
};

export default Project;
