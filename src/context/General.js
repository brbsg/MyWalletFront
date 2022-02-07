import React, { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export function GeneralProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    token: "",
  });

  const [statementId, setStatementId] = useState();

  return (
    <GeneralContext.Provider
      value={{ statementId, setStatementId, user, setUser }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export function useGeneral() {
  const { statementId, setStatementId, user, setUser } =
    useContext(GeneralContext);

  return { statementId, setStatementId, user, setUser };
}
