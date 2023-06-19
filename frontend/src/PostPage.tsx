import ReactMarkdown from "react-markdown";
import posts from "./posts";

type PostPageProps = {
  id: string;
};

function PostPage({ id }: PostPageProps) {
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found</p>;

  return <ReactMarkdown>{post.content}</ReactMarkdown>;
}

export default PostPage;
