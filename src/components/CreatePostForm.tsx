"use client";

import { useState } from "react";

type Props = {
  submitPost: (title: string, content: string) => Promise<void>;
};

const CreatePostForm = ({ submitPost }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // 내용 입력 추가
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: 실제 API 연동 시 주석 해제
      // await axios.post('/api/posts', { title, content })
      await submitPost(title, content);
      console.log("포스트 생성 완료:", { title, content });

      alert("게시글이 등록되었습니다.");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("생성 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 flex w-full max-w-2xl flex-col items-stretch gap-4 rounded-md border border-gray-300 p-6 shadow-sm">
      <div className="text-lg font-bold text-gray-800">새 게시글 작성</div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          rows={4}
          className="resize-none rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`mt-2 rounded-lg bg-gray-800 py-3 text-lg font-semibold text-white transition-colors ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-600"}`}
      >
        {isLoading ? "등록 중..." : "게시글 등록하기"}
      </button>
    </div>
  );
};

export default CreatePostForm;
