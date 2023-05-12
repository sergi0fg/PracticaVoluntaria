export interface Post {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  replies: Comment[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

