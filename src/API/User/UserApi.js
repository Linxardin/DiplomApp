import axios from "axios";

export const UserClient = axios.create({
  baseURL: "https://localhost:7008/api/user",
});