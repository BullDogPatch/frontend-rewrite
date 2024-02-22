import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
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
