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
        const absoluteText = text.replace(/\]\((.*?)\)/g, `](/posts/$1)`); // Replace relative paths in markdown
        setPostContent(absoluteText);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div
      style={{ marginLeft: "600px", marginRight: "600px", lineHeight: "1.75" }}
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={postContent} />
    </div>
  );
};

export default BlogPost;
