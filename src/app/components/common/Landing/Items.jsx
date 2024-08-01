"use client";
import { useState, useEffect } from "react";

const Landing = () => {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isPortefolioVisible, setIsPortefolioVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsNameVisible(true);
    }, 200);
    setTimeout(() => {
      setIsPortefolioVisible(true);
    }, 1200);
  }, []);
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center text-center flex-col md:flex-row text-3xl md:gap-5 lg:gap-6 text-white xl:text-[50px]">
      <span
        className={` font-extralight transition-opacity duration-[2000ms] ${
          isNameVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Théo Lalande
      </span>
      <span
        className={`font-medium transition-opacity duration-[2000ms] ${
          isPortefolioVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Portefolio
      </span>
    </div>
  );
};

export default Landing;
