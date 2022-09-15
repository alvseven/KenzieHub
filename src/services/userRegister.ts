import { api } from "./api";

export interface UserRegisterProps {
  id: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string | null;
  course_module: string;
}

export async function userRegister(
  userData: UserRegisterProps
): Promise<UserRegisterProps> {
  const { email, password, name, bio, contact, course_module } = userData;
  const { data } = await api.post("/users", {
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  });
  return data;
}
