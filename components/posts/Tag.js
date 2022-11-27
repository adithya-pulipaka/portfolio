import React from "react";

const Tag = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="bg-slate-200 p-2 m-2 rounded-2xl hover:bg-slate-500 hover:text-white"
    >
      #{children}
    </button>
  );
};

export default Tag;
