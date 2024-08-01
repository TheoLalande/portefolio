import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-black flex flex-row justify-between items-center pt-2 px-10 w-full">
      <a href="/" className="flex w-1/3 text-base justify-start ">
        Stack
      </a>
      <div className="relative flex w-10 h-10  sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image
          src="/logo.svg"
          alt="logo"
          fill
          className="object-contain w-10 h-10"
          priority
        />
      </div>
      <a href="/" className=" flex w-1/3 text-base justify-end ">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
