import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
import PostPage from "./pages/PostPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllPosts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:documentId" element={<PostPage />} /> {/* ✅ Updated to use documentId */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
