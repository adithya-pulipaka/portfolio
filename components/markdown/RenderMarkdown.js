import React from "react";
import { MDXRemote } from "next-mdx-remote";
import MetaInfo from "./MetaInfo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const components = { MetaInfo };

const RenderMarkdown = ({ content, scope }) => {
  return (
    <div className="prose mt-8 max-w-fit mx-auto mb-8">
      <Link href={"/blog"}>
        <button className="hover:bg-slate-400 hover:text-white px-2 py-1 rounded-lg mb-3">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="pr-2 hover:text-white"
          ></FontAwesomeIcon>
          Go Back
        </button>
      </Link>
      <MDXRemote {...content} components={components} scope={scope} />
    </div>
  );
};

export default RenderMarkdown;
