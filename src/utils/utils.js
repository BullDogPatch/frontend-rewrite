import axios from "axios";

const api = axios.create({
  baseURL: "https://vast-plum-donkey-hose.cyclic.app/api",
});

export const fetchAllArticles = async () => {
  const { data } = await api.get("/articles");
  return data.articles;
};

export const fetchAllUsers = async () => {
  const { data } = await api.get("/users");
  return data.users;
};

export const getTopics = async () => {
  const { data } = await api.get("/topics");
  return data.topics
};
