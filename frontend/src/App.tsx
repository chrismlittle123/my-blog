import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import posts from "./posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {posts.map((post) => (
          <Route
            path={`/post/${post.id}`}
            key={post.id}
            element={<PostPage id={post.id} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
