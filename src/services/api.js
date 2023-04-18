import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-klzh.onrender.com",
});
