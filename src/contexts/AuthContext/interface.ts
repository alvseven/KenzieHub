import { ReactNode } from "react";
import { User } from "../../services/getUser";
import { UserLoginProps } from "../../services/userLogin";
import { UserRegisterProps } from "../../services/userRegister";

export interface AuthProps {
  children: ReactNode;
}

export interface AuthProviderData {
  user: User | null;
  isLoading: boolean;
  loginSubmit: (data: UserLoginProps) => void;
  registerSubmit: (data: UserRegisterProps) => void;
}
