import * as yup from "yup";

import {
  atLeastOneLowerCase,
  atLeastOneUpperCase,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  AtLeastEightDigits,
  cellphoneFormat,
} from "../utils/validations";

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Preencha o campo senha"),
});

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Preencha o campo nome"),
  email: yup
    .string()
    .required("Preencha o campo email")
    .email("Formato de e-mail inválido"),
  password: yup
    .string()
    .required("Preencha o campo senha")
    .matches(
      atLeastOneLowerCase,
      "A senha deve conter pelo menos uma letra minúscula"
    )
    .matches(
      atLeastOneUpperCase,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .matches(atLeastOneNumber, "A senha deve conter pelo menos 1 número")
    .matches(
      atLeastOneSpecialCharacter,
      "A senha deve conter pelo menos um caractere especial"
    )
    .matches(AtLeastEightDigits, "A senha deve conter pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Preencha o campo confirmar senha")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  bio: yup.string().required("Preencha o campo bio"),
  contact: yup
    .string()
    .required("Preencha o campo contato")
    .matches(cellphoneFormat, "Formato de número inválido"),
});

const addTechFormSchema = yup.object().shape({
  title: yup.string().required("Preencha o campo nome"),
});

export { loginFormSchema, registerFormSchema, addTechFormSchema };
