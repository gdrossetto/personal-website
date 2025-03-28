import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import BlogPage from "./pages/blog/BlogPage.tsx";
import BlogPostPage from "./pages/blog/BlogPostPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:documentId" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
