"use client";
import LandingPage from "./components/common/Landing/LandingPage";
import GaleryModal from "./components/Projects/GaleryModal";
import Project from "./components/Projects/Project";
export default function Home() {
  return (
    <main className="pb-8">
      <LandingPage />
      <div className="flex flex-col m-10 z-0 gap-8 ">
        <Project
          projectName="Datafirst"
          thumbnail="/Assets/ProjectPictures/Datafirst/Datafirst.png"
          picturePath="/Assets/ProjectPictures/Datafirst/"
          pictureNames={[
            "data_1.png",
            "data_2.png",
            "data_3.png",
            "data_4.png",
            "data_5.png",
            "data_6.png",
          ]}
        />
      </div>
    </main>
  );
}
