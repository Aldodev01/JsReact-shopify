// const token = sessionStorage.getItem("authorization");

import { contextApi } from "./ApiContext";

export const CartGet = async () => {
  try {
    const result = await contextApi(`/api/v1/cart/`, {
      method: "GET",
      headers: {
        // "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + token,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const CartAdd = async (productId, qty) => {
  try {
    const result = await contextApi(
      `/api/v1/cart/25efb2c7-d5df-45d8-8003-c9996ff611d2/add?product_id=${productId}&quantity=${qty}`,
      {
        method: "POST",
        headers: {
          // "access-control-allow-origin" : "*",
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + token,
        },
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};
