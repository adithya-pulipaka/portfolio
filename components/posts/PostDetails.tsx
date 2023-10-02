import React, { useEffect } from "react";
import RenderMarkdown from "../markdown/RenderMarkdown";
import { format, parse } from "date-fns";
import readingTime from "reading-time";
import { useBlogContext } from "../../hooks/useBlogContext";

const PostDetails = ({ content, frontMatter }) => {
  const blogContext = useBlogContext();
  const { metadata, setMetadata } = blogContext.currentState;

  useEffect(() => {
    const currVal = {
      frontMatter,
      readingTime: readingTime(content.compiledSource).text,
    };
    if (!Object.keys(metadata).includes(frontMatter.slug)) {
      setMetadata({
        ...metadata,
        [frontMatter.slug]: currVal,
        current: currVal,
      });
    } else {
      setMetadata({ ...metadata, current: currVal });
    }
  }, [frontMatter.slug]);
  return (
    <section className="max-w-5xl mx-auto">
      <article className="">
        <RenderMarkdown content={content} scope={null}></RenderMarkdown>
      </article>
    </section>
  );
};

export default PostDetails;
