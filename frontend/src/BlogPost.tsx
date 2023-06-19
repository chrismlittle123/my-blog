import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const BlogPost: React.FC = () => {
  const { "*": id } = useParams();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${id}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Could not fetch the markdown file: ${response.status}`
          );
        }
        return response.text();
      })
      .then((text) => {
        setPostContent(text);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={postContent} />
    </div>
  );
};

export default BlogPost;
