import React, { createContext } from "react";
import CartContextProvider from "./CartContext";
import MobileContextProvider from "./MobileContext";
import ProductContextProvider from "./ProductContext";

export const ContextWrapper = createContext();

const ContextWrapperProvider = ({ children }) => {
  return (
    <ContextWrapper.Provider value={[]}>
      <MobileContextProvider>
        <ProductContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ProductContextProvider>
      </MobileContextProvider>
    </ContextWrapper.Provider>
  );
};

export default ContextWrapperProvider;
