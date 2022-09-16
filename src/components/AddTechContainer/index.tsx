import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import { AddContainer, AddButton } from "./styles";

function AddTechContainer() {
  const { toggleModalAddVisibility } = useContext(UserContext);

  return (
    <AddContainer>
      <h4>Tecnologias</h4>
      <AddButton onClick={toggleModalAddVisibility}>+</AddButton>
    </AddContainer>
  );
}

export default AddTechContainer;
