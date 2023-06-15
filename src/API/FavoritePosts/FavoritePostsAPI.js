import axios from "axios";

export const FavoritePostsClient = axios.create({
  baseURL: "https://localhost:7008/favoriteposts",
});