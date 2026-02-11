import { useEffect, useState } from "react";
import { getPosts, type Post } from "../api/post.api";
import { Link } from "react-router-dom";

// 홈페이지 컴포넌트
function Home() {
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
      <nav className="bg-gray-100 p-4">
        <Link to="/login" className="text-blue-500 hover:underline">
          Go to Login Page
        </Link>
      </nav>
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">Posts</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-md border border-gray-300 p-4"
            >
              <div className="text-lg font-bold">{post.title}</div>
              <div className="text-sm text-gray-600">
                Author ID: {post.author_id}
              </div>
              <div className="mt-2">{post.content}</div>
              <div className="mt-2 text-sm text-gray-500">
                Created at: {post.created_at}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
