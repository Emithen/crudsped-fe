import { useEffect, useState } from "react";
import { getPosts, type Post } from "./api/post.api";

// 루트 컴포넌트
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!posts) return null;

  return (
    <>
      <div>App Component</div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col rounded-md border border-gray-300 p-4"
        >
          <div>{post.title}</div>
          <div>{post.author_id}</div>
          <div>{post.content}</div>
          <div>{post.created_at}</div>
        </div>
      ))}
    </>
  );
}

export default App;
