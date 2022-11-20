import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext("");

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }) {
  const currentState = appStateFn();
  return (
    <AppContext.Provider value={{ currentState }}>
      {children}
    </AppContext.Provider>
  );
}

const appStateFn = () => {
  const [appInfo, setAppInfo] = useState({ isBlog: false });

  return {
    appInfo,
    setAppInfo,
  };
};
