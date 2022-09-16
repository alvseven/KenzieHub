import { useContext, useState } from "react";

import { UserContext } from "../../contexts/UserContext";

import {
  ModalInner,
  ModalContainer,
  CloseContainer,
  EditTechForm,
} from "./styles";

function EditTechModal() {
  const { tech, toggleModalDetailsVisibility, editTechStatus, deleteTech } =
    useContext(UserContext);

  const [techStatus, setTechStatus] = useState(tech.status);

  return (
    <ModalInner>
      <ModalContainer>
        <CloseContainer>
          <h5>Edite ou exclua a tecnologia</h5>
          <button onClick={toggleModalDetailsVisibility}>X</button>
        </CloseContainer>

        <EditTechForm onSubmit={(e) => editTechStatus(e, tech.id, techStatus)}>
          <label htmlFor="title">Nome</label>
          <input id="title" disabled value={tech.title} />
          <label htmlFor="status">Selecionar status</label>
          <select
            defaultValue={tech.status}
            onChange={(e) => setTechStatus(e.target.value)}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Editar tecnologia</button>
          <button type="button" onClick={() => deleteTech(tech.id)}>
            Excluir tecnologia
          </button>
        </EditTechForm>
      </ModalContainer>
    </ModalInner>
  );
}

export default EditTechModal;
