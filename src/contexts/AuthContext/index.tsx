import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { AuthProps, AuthProviderData } from "./interface";
import { api } from "../../services/api";
import { User } from "../../services/getUser";
import { userRegister, UserRegisterProps } from "../../services/userRegister";
import { userLogin, UserLoginProps } from "../../services/userLogin";

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
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
    }
    autoLogin();
  }, []);

  const loginSubmit = async (userData: UserLoginProps) => {
    try {
      const { token, user } = await userLogin(userData);
      if (token && user) {
        localStorage.setItem("@kenzie-hub:token", token);
        localStorage.setItem("@kenzie-hub:userId", user.id);

        toast.success("Login realizado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        setUser(user);
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      toast.error(
        "Não foi possível realizar o login! dados informados incorretos",
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }
      );
    }
  };

  const registerSubmit = async (userData: UserRegisterProps) => {
    try {
      const { id } = await userRegister(userData);
      if (id) {
        toast.success("Conta criada com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        navigate("/", { replace: true });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          toast.error(
            "Não foi possível criar a sua conta, email já cadastrado!",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            }
          );
        } else {
          toast.error("Oops, algo deu errado!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginSubmit,
        registerSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
