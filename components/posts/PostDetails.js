import React from "react";
import RenderMarkdown from "../markdown/RenderMarkdown";
import { format, parse } from "date-fns";
import readingTime from "reading-time";

const PostDetails = ({ content, frontMatter }) => {
  const scopeInfo = {
    author: frontMatter.author,
    posted: format(
      parse(frontMatter.created, "MM-dd-yyyy", new Date()),
      "MMM do, yyyy"
    ),
    readingTime: readingTime(content.compiledSource).text,
  };
  return (
    <section className="max-w-4xl mx-auto">
      <article className="">
        <RenderMarkdown content={content} scope={scopeInfo}></RenderMarkdown>
      </article>
    </section>
  );
};

export default PostDetails;
