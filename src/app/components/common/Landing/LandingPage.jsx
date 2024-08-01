"use client";
import React from "react";
import Landing from "./Items";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isLanding, setisLanding] = useState(true);
  const [isDivShown, setIsDivShown] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLanding(false);
    }, 2000);
    setTimeout(() => {
      setIsDivShown(false);
    }, 5000);
  }, []);
  if (isDivShown) {
    return (
      <div
        className={`landing-container z-50 absolute top-0 left-0 transition-opacity duration-[3000ms] ${
          isLanding ? "opacity-100" : "opacity-0"
        }`}
      >
        <Landing />
      </div>
    );
  }
  return null;
};

export default LandingPage;
