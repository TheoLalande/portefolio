import React from "react";

const Badges = (props) => {
  return (
    <div
      className={`inline-flex items-center font-light rounded-md bg-white px-2 py-1 text-xs  ring-1 ring-inset ring-[${props.borderColor}] h-6`}
    >
      {props.text}
    </div>
  );
};

export default Badges;
