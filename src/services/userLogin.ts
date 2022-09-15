import { api } from "./api";
import { User } from "./getUser";

export interface UserLoginProps {
  email: string;
  password: string;
}

interface UserLoginResponse {
  token: string;
  user: User;
}

export async function userLogin(
  userData: UserLoginProps
): Promise<UserLoginResponse> {
  const { email, password } = userData;
  const { data } = await api.post("/sessions", {
    email,
    password,
  });
  return data;
}
