import axios from "axios";

export const ApartmentClient = axios.create({
  baseURL: "https://localhost:7008/api/apartment",
});