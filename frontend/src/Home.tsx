import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const blogs = [
    {
      id: 1,
      heading: "What do I need to do to get fired around here?",
      date: "19 June 2023",
    },
    {
      id: 2,
      heading: "Penis with Ears",
      date: "8 July 2023",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Chris Little</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "30%",
          margin: "0 auto",
        }}
      >
        <img src="images/me.jpg" style={{ width: "30%", borderRadius: "5%" }} />
        <div style={{ marginLeft: "1rem" }}>
          <p style={{ lineHeight: "1.75" }}>
            Hi I'm Chris, here is where you can listen to my rants about the
            corporate world, my thoughts on technology, some light YouTuberesque
            philosophy and a bunch of other random stuff.
          </p>
        </div>
      </div>
      <h2 style={{ marginTop: "2rem", textAlign: "center" }}>Posts</h2>
      {blogs.map((blog) => (
        <p key={blog.id}>
          {blog.date}: <Link to={`/blog-post/${blog.id}`}>{blog.heading}</Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
