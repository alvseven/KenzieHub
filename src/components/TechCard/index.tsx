import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { TechCardProps } from "./interface";

import { TechListItem } from "./styles";

function TechCard({ tech }: TechCardProps) {
  const { setTechToEdit } = useContext(UserContext);

  return (
    <TechListItem
      role="button"
      status={tech.status}
      key={tech.title}
      id={tech.id}
      onClick={() => setTechToEdit(tech)}
    >
      <h5>{tech.title}</h5>
      <span>{tech.status}</span>
    </TechListItem>
  );
}

export default TechCard;
