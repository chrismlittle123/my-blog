import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const blogs = Array(1)
    .fill(0)
    .map((_, i) => i + 1); // Create an array

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <h1>Chris Little</h1>
      <p>Welcome to my blog</p>
      {blogs.map((blog) => (
        <p key={blog}>
          <Link to={`/blog-post/${blog}`}>BlogPost{blog}</Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
