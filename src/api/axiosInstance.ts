import axios from "axios";

export const api = axios.create({
  baseURL: "https://todo-list-api-lemon.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});