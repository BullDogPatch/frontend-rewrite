import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import ArticleById from "./components/ArticleById";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <section>
        <Routes>
          <Route index element={<Articles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
