import React from "react";
import { MDXRemote } from "next-mdx-remote";
import MetaInfo from "./MetaInfo";

const components = { MetaInfo };

const RenderMarkdown = ({ content, scope }) => {
  return (
    <div className="prose mt-8 max-w-fit">
      <MDXRemote {...content} components={components} scope={scope} />
    </div>
  );
};

export default RenderMarkdown;
