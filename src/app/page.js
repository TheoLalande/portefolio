"use client";
import Projects from "./utils/enums/ProjectsData";
import LandingPage from "./components/common/Landing/LandingPage";
import GaleryModal from "./components/Projects/GaleryModal";
import Project from "./components/Projects/Project";
export default function Home() {
  return (
    <main className="pb-8">
      <LandingPage />
      <div className="flex flex-col m-10 z-0 gap-8 ">
        {Projects.map((project, index) => {
          return (
            <Project
              key={index}
              projectName={project.projectName}
              thumbnail={project.thumbnail}
              titleColor={project.titleColor}
              picturePath={project.picturePath}
              projectDesc={project.projectDesc}
              badges={project.badges}
              pictureNames={project.pictureNames}
            />
          );
        })}
      </div>
    </main>
  );
}
