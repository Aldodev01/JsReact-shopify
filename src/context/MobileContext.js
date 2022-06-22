import React, { createContext, useState } from "react";

export const MobileContext = createContext();

const MobileContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState({
    isMobile: false,
    language: "English",
  });
  return (
    <MobileContext.Provider value={[mobile, setMobile]}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
