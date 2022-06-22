// const token = sessionStorage.getItem("authorization");

import { contextApi } from "./ApiContext";

export const ProductGetByPage = async (page, size) => {
  try {
    const result = await contextApi(
      `/api/v1/product?page=${page}&per_page=${size}`,
      {
        method: "GET",
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
