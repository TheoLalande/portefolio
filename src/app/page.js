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
          titleColor={"text-[#000000]"}
          picturePath="/Assets/ProjectPictures/Datafirst/"
          projectDesc="Plateforme interne de KPIs"
          badges={[
            { borderColor: "border-[#007ACC]", text: "Typescript" },
            { borderColor: "border-[#FFD700]", text: "SQL" },
            { borderColor: "border-[#F0DB4F]", text: "Javascript" },
            { borderColor: "border-[#13AA52]", text: "MongoDb" },
            { borderColor: "border-[#13AA52]", text: "Nuxt2" },
            { borderColor: "border-[#13AA52]", text: "Tailwind" },
          ]}
          pictureNames={[
            "data_1.png",
            "data_2.png",
            "data_3.png",
            "data_4.png",
            "data_5.png",
            "data_6.png",
          ]}
        />
        <Project
          projectName="Onryo"
          titleColor={"text-[#000000]"}
          thumbnail="/Assets/ProjectPictures/Onryo/onryo.png"
          picturePath="/Assets/ProjectPictures/Onryo/"
          projectDesc="Site E-commerce de vente de t-shirts"
          badges={[
            { borderColor: "border-[#007ACC]", text: "Typescript" },
            { borderColor: "border-[#FFD700]", text: "Supabase" },
            { borderColor: "border-[#F0DB4F]", text: "Postgres" },
            { borderColor: "border-[#13AA52]", text: "NextJs" },
            { borderColor: "border-[#13AA52]", text: "Medusa" },
            { borderColor: "border-[#13AA52]", text: "Flexbox" },
          ]}
          pictureNames={[
            "onryo_1.png",
            "onryo_2.png",
            "onryo_3.png",
            "onryo_4.png",
          ]}
        />
        <Project
          projectName="Compufirst"
          titleColor={"text-[#FFFFFF]"}
          thumbnail="/Assets/ProjectPictures/Compufirst/compufirst.png"
          picturePath="/Assets/ProjectPictures/Compufirst/"
          projectDesc="Site de vente de matériel informatique (B2B)"
          badges={[
            { borderColor: "border-[#007ACC]", text: "SpringBoot" },
            { borderColor: "border-[#FFD700]", text: "MySQL" },
            { borderColor: "border-[#F0DB4F]", text: "Nuxt3" },
            { borderColor: "border-[#13AA52]", text: "Stripe" },
            { borderColor: "border-[#13AA52]", text: "Strappi" },
            { borderColor: "border-[#13AA52]", text: "TailwindCss" },
          ]}
          pictureNames={[
            "compufirst_1.png",
            "compufirst_2.png",
            "compufirst_3.png",
            "compufirst_4.png",
            "compufirst_5.png",
            "compufirst_6.png",
            "compufirst_7.png",
            "compufirst_8.png",
            "compufirst_9.png",
          ]}
        />
      </div>
    </main>
  );
}
