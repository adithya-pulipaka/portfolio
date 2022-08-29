import React from "react";
import RenderMarkdown from "../markdown/RenderMarkdown";
import PostHeader from "./PostHeader";

const PostDetails = ({ content, meta }) => {
  return (
    <article className="max-w-2xl mx-auto">
      <RenderMarkdown content={content}></RenderMarkdown>
    </article>
  );
};

export default PostDetails;
