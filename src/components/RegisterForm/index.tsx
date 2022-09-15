import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../contexts/AuthContext";
import { registerFormSchema } from "../../schemas";
import { UserRegisterProps } from "../../services/userRegister";
import { normalizePhoneNumber } from "../../utils/phonemask";

import { FormContainer, Error } from "./styles";

function RegisterForm() {
  const { registerSubmit } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserRegisterProps>({
    resolver: yupResolver(registerFormSchema),
  });

  const phoneValue = watch("contact");

  useEffect(() => {
    setValue("contact", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  return (
    <FormContainer onSubmit={handleSubmit(registerSubmit)}>
      <h3>Crie sua conta</h3>

      <label htmlFor="name">Nome</label>

      <input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <Error>{errors.name?.message}</Error>

      <label htmlFor="email">Email</label>

      <input
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Error> {errors.email?.message} </Error>

      <label htmlFor="password">Senha</label>

      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <Error>{errors.password?.message}</Error>
      <label htmlFor="confirm-password">Confirmar Senha</label>

      <input
        type="password"
        id="confirm-password"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
      />
      <Error>{errors.confirmPassword?.message}</Error>

      <label htmlFor="bio">Bio</label>

      <input
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <Error>{errors.bio?.message}</Error>

      <label htmlFor="contact">Contato</label>

      <input
        type="tel"
        id="contato"
        placeholder="Digite seu número"
        {...register("contact")}
      />
      <Error>{errors.contact?.message} </Error>

      <label htmlFor="module">Módulo</label>
      <select {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>

      <Link to="/">Já possui uma conta? Clique aqui para fazer login</Link>
      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
}

export default RegisterForm;
