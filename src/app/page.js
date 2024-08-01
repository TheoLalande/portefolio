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
          picturePath="/Assets/ProjectPictures/Datafirst.png"
        />
      </div>
      <GaleryModal />
    </main>
  );
}
