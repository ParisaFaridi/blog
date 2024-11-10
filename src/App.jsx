import Author from "./components/Author.jsx";
import Blog from "./components/Blog.jsx";
import HomePage from "./components/home/HomePage.jsx";
import Layout from "./components/layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<Blog />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
