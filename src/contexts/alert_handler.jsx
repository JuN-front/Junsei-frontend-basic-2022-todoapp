import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const Alert_Handler = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    setAlertState((alertState) => ({
      ...alertState,
      visible: true,
      errorText: errorText,
    }));
  };

  const closeAlert = () => {
    setAlertState((alertState) => ({ ...alertState, visible: false }));
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
