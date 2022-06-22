import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartAddC, setCartAddC] = useState([]);
  return (
    <CartContext.Provider value={[cartAddC, setCartAddC]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
