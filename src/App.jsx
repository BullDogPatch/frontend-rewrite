import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Users from "./components/Users";

function App() {
  return (
    <div className="container">
      <Header />
      <section>
        <Routes>
          <Route index element={<Articles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
