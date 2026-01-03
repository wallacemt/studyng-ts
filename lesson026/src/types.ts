export type Post = {
  id: number;
  title: string;
  body: string;
  userId: string;
  tags: string[];
  reactions: number;
};

export type PostResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};
