import axios from "axios";

export const contextApi = axios.create({
  baseURL: "https://delta.sandbox.spriicommerce.com",
  // baseURL: API_BASEURL_LOCAL,
});
