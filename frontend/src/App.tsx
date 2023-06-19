import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BlogPost from "./BlogPost";
import "./styles.css"; // import the CSS file

const App: React.FC = () => (
  <div className="common-style">
    <Router>
      <Routes>
        <Route path="/blog-post/*" element={<BlogPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
