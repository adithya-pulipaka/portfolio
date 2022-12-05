import React from "react";

const Tag = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="bg-slate-200 py-1 px-2 rounded-lg hover:bg-slate-500 hover:text-white"
    >
      #{children}
    </button>
  );
};

export default Tag;
