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
      <h3>Login</h3>

      <label htmlFor="email">Email</label>
      <div>
        <input
          type="email"
          id="email"
          placeholder="tsunode@email.com"
          {...register("email")}
        />
      </div>
      <Error>{errors.email?.message} </Error>
      <label htmlFor="password">Senha</label>
      <div>
        <input
          type={passwordVisibility}
          id="password"
          placeholder="**********"
          {...register("password")}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {passwordIcon}
        </button>
      </div>
      <Error> {errors.password?.message}</Error>
      <Link to="/register">
        Ainda não possui uma conta? Clique aqui para se cadastrar
      </Link>
      <button type="submit">Entrar</button>
    </FormContainer>
  );
}

export { LoginForm };
