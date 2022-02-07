import React, { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export function GeneralProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    token: "",
  });

  return (
    <GeneralContext.Provider value={{ user, setUser }}>
      {children}
    </GeneralContext.Provider>
  );
}

export function useGeneral() {
  const { user, setUser } = useContext(GeneralContext);

  return { user, setUser };
}
