import { api } from "./api";

export interface UserTech {
  id: string;
  title: string;
  status: string;
  user?: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

export interface User {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: UserTech[];
  updated_at: string;
  works: UserTech[];
}

export async function getUser(userId: string | null): Promise<User> {
  const { data } = await api.get<User>(`/users/${userId}`);
  return data;
}
