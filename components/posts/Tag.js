import React from "react";

const Tag = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="bg-slate-200 p-2 m-2 rounded-2xl"
    >
      #{children}
    </button>
  );
};

export default Tag;
