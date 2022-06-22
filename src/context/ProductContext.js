import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productC, setProductC] = useState({
    opened: false,
    name: "",
    price: 0,
    desc: "",
    image: "",
    stock: 1,
    id: "",
  });
  return (
    <ProductContext.Provider value={[productC, setProductC]}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
