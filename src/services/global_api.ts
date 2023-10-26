import axios from "axios";

export const requestApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});
