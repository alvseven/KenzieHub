import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import {
  ModalInner,
  ModalContainer,
  CloseContainer,
  EditTechForm,
} from "./styles";

function EditTechModal() {
  const { toggleModalDetailsVisibility, editTechStatus, tech } =
    useContext(UserContext);

  return (
    <ModalInner>
      <ModalContainer>
        <CloseContainer>
          <h5>Edite ou exclua a tecnologia</h5>
          <button onClick={toggleModalDetailsVisibility}>X</button>
        </CloseContainer>

        <EditTechForm onSubmit={editTechStatus}>
          <label htmlFor="title">Nome</label>
          <input id="title" disabled value={tech.title} />
          <label htmlFor="status">Selecionar status</label>
          <select defaultValue={tech.status}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button>Editar tecnologia</button>
          <button>Excluir tecnologia</button>
        </EditTechForm>
      </ModalContainer>
    </ModalInner>
  );
}

export default EditTechModal;
