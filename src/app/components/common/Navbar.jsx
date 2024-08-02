import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative mt-3 flex w-full h-8  sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
      <Image
        src="/logo2.svg"
        alt="logo"
        fill
        className="object-contain w-8 h-8"
        priority
      />
    </div>
  );
};

export default Navbar;
