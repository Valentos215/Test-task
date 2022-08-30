import React from "react";
import { createContext, useState } from "react";

export const CurrentUserContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => ""]);
export const CurrentUserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <CurrentUserContext.Provider value={[token, setToken]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
