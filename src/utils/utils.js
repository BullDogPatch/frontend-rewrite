import axios from 'axios';

const api = axios.create({
  baseURL: 'https://northcoders-backend.onrender.com/api',
});

export const fetchAllArticles = async () => {
  const { data } = await api.get('/articles');
  return data.articles;
};

export const fetchArticleById = async (article_id) => {
  const { data } = await api.get(`/articles/${article_id}`);
  return data;
};

export const fetchCommentsByArticleId = async (article_id) => {
  const { data } = await api.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const fetchAllUsers = async () => {
  const { data } = await api.get('/users');
  return data.users;
};

export const getTopics = async () => {
  const { data } = await api.get('/topics');
  return data.topics;
};

export const getArticlesByTopic = async (topic) => {
  const { data } = await api.get(`/articles?topic=${topic}`);
  return data.articles;
};
