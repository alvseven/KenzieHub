import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../contexts/UserContext";
import { addTechFormSchema } from "../../schemas";
import { CreateTechProps } from "../../services/createTech";

import {
  ModalInner,
  ModalContainer,
  CloseContainer,
  RegisterTechForm,
  Error,
} from "./styles";

function AddTechModal() {
  const { createTech, toggleModalAddVisibility } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTechProps>({
    resolver: yupResolver(addTechFormSchema),
  });

  return (
    <ModalInner>
      <ModalContainer>
        <CloseContainer>
          <h5>Adicione uma tecnologia</h5>
          <button onClick={toggleModalAddVisibility}>X</button>
        </CloseContainer>

        <RegisterTechForm onSubmit={handleSubmit(createTech)}>
          <label htmlFor="title">Nome</label>
          <input
            type="title"
            id="title"
            placeholder="Digite aqui a tecnologia"
            {...register("title")}
          />
          <Error>{errors.title?.message}</Error>
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Adicionar tecnologia</button>
        </RegisterTechForm>
      </ModalContainer>
    </ModalInner>
  );
}

export default AddTechModal;
