import { instance } from "./axios";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await instance.get("/posts");
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export type Post = {
  id: string;
  author_id: string;
  title: string;
  content: string;
  created_at: string;
};
