import React from "react";

const MetaInfo = ({ data }) => {
  return (
    <>
      <div className="flex justify-between text-gray-500 text-sm -mt-4">
        <p>
          <span className="font-bold pr-0"></span> {data.author}
        </p>
        <p>
          {data.posted} / <span className="font-bold">{data.readingTime}</span>
        </p>
      </div>
    </>
  );
};

export default MetaInfo;
