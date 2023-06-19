import { Link } from "react-router-dom";
import posts from "./posts";

function HomePage() {
  return (
    <div>
      <img
        src="https://www.svgrepo.com/show/513700/carrot.svg"
        alt="Description of image"
      />
      <p>Your description here</p>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
