import { createContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserRegisterProps } from "../../services/userRegister";

import { UserLoginProps, userLogin } from "../../services/userLogin";
import { User } from "../../services/getUser";
import { AuthProps, AuthProviderData } from "./interface";

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@kenzie-hub:token");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          console.error(error);
        }
        navigate("/dashboard", { replace: true });
      }

      setIsLoading(false);
    }
    getUser();
  }, []);

  const loginSubmit = (data: UserLoginProps) => {};

  const registerSubmit = (data: UserRegisterProps) => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        loginSubmit,
        registerSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
