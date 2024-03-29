import React, { useState, useEffect } from "react";
import { useBlogContext } from "../../hooks/useBlogContext";
import { format, parse } from "date-fns";
import Tag from "../posts/Tag";
import { useRouter } from "next/router";

const MetaInfo = () => {
  const blogContext = useBlogContext();
  const { metadata } = blogContext.currentState;
  const router = useRouter();

  let data;
  if (metadata.current) {
    const { frontMatter, readingTime } = metadata.current;
    data = {
      author: frontMatter.author,
      posted: format(
        parse(frontMatter.created, "MM-dd-yyyy", new Date()),
        "MMM do, yyyy"
      ),
      tags: frontMatter.tags,
      readingTime,
    };
  }

  return (
    <>
      {data && (
        <>
          <div className="flex justify-between text-gray-500 text-sm -mt-4">
            <p>
              <span className="font-bold pr-0"></span> {data.author}
            </p>
            <p>
              {data.posted} ||{" "}
              <span className="font-bold">{data.readingTime}</span>
            </p>
          </div>
          <div className="text-xs flex gap-2">
            {data.tags.map((name) => {
              return (
                <Tag
                  key={name}
                  onClick={() => router.push(`/blog?tag=${name}`)}
                >
                  {name}
                </Tag>
              );
            })}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default MetaInfo;
