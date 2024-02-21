import axios from "axios";

const api = axios.create({
  baseURL: "https://vast-plum-donkey-hose.cyclic.app/api",
});

export const fetchAllArticles = async () => {
  const { data } = await api.get("/articles");
  return data.articles;
};
