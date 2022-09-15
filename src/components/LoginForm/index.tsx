import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";

import { FormContainer, Error } from "./styles";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { UserLoginProps } from "../../services/userLogin";
import { loginFormSchema } from "../../schemas";

function LoginForm() {
  const { loginSubmit } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginProps>({
    resolver: yupResolver(loginFormSchema),
  });

  const passwordVisibility = passwordShown ? "text" : "password";
  const passwordIcon = passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />;

  return (
    <FormContainer onSubmit={handleSubmit(loginSubmit)}>
      <h3>Faça login</h3>
      <label htmlFor="email">Email</label>
      <div className="email-container">
        <input
          type="email"
          id="email"
          placeholder="alvseven@email.com"
          {...register("email")}
        />
      </div>
      <Error>{errors.email?.message} </Error>
      <label htmlFor="password">Senha</label>
      <div className="password-container">
        <input
          type={passwordVisibility}
          id="password"
          placeholder="**********"
          {...register("password")}
        />
        <button
          id="password-visibility"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {passwordIcon}
        </button>
      </div>
      <Error> {errors.password?.message}</Error>
      <Link to="/register">
        Ainda não possui uma conta? Clique aqui para se cadastrar
      </Link>
      <button id="login-button" type="submit">
        Entrar
      </button>
    </FormContainer>
  );
}

export { LoginForm };
