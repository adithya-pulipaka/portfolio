import React, { createContext, useContext, useState } from "react";

type AppContextType = any;

export const AppContext = createContext<AppContextType | null>("");

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
