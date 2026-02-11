import { useEffect, useState } from "react";
import { logout } from "../api/auth";
import { createPost, getPosts, type Post } from "../api/post.api";
import CreatePostForm from "../components/CreatePostForm";

export const DashboardPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  const submitPost = async (title: string, content: string) => {
    try {
      await createPost(title, content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!posts) return null;

  return (
    <div className="flex h-screen w-full flex-col items-center">
      {/* Header */}
      <div className="mt-10 flex w-full items-center justify-between px-10">
        <div className="text-2xl font-bold">Dashboard</div>
        <button
          className="cursor-pointer rounded-lg bg-gray-800 px-3 py-1 text-white hover:bg-gray-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Create Post Form */}
      <CreatePostForm submitPost={submitPost} />

      {/* Post List */}
      <div className="mt-10 flex w-full flex-col items-center gap-4 rounded-md border border-gray-300 p-4">
        <div className="flex w-full justify-between text-2xl font-bold">
          <div>Posts</div>
        </div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col rounded-md border border-gray-300 p-4"
          >
            <div className="text-lg font-bold">{post.title}</div>
            <div className="mt-2">{post.content}</div>
            <div className="mt-2 text-sm text-gray-500">
              작성일시: {formatDate(post.created_at)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24시간 형식
  }).format(date);
};
