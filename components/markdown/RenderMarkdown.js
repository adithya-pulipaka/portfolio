import React, { useEffect, useState } from "react";
import { useRemark } from "react-remark";

const RenderMarkdown = ({ content }) => {
  const [markdownContent, setMarkdownContent] = useRemark();

  useEffect(() => {
    setMarkdownContent(content);
  }, []);

  return <div className="prose mt-8">{markdownContent}</div>;
};

export default RenderMarkdown;
