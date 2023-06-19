import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BlogPost from "./BlogPost";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/blog-post/*" element={<BlogPost />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
