import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "border-green-500"
    : "border-slate-600 hover:border-white";

  return (
    <button
      className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer ${buttonStyle}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
