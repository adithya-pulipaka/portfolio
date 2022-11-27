import React, { createContext, useContext, useState } from "react";

export const BlogContext = createContext("");

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
