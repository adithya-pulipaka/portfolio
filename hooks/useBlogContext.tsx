import React, { createContext, useContext, useState } from "react";

type BlogContextType = any;

export const BlogContext = createContext<BlogContextType | null>("");

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export function BlogContextProvider({ children }) {
  const currentState = blogStateFn();
  return (
    <BlogContext.Provider value={{ currentState }}>
      {children}
    </BlogContext.Provider>
  );
}

const blogStateFn = () => {
  const [metadata, setMetadata] = useState({});

  return {
    metadata,
    setMetadata,
  };
};
