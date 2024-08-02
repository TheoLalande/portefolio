"use client";
import Projects from "./utils/enums/ProjectsData";
import LandingPage from "./components/common/Landing/LandingPage";
import Project from "./components/Projects/Project";
import Button from "./components/common/Form";
export default function Home() {
  return (
    <main className="pb-12">
      <LandingPage />
      <div className="flex flex-col mb-10 mt-5 z-0 gap-8 ">
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
      <Button />
    </main>
  );
}
