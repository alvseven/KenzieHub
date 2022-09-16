import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { UserTech } from "../../services/getUser";
import TechCard from "../TechCard";

import { EmptyTechContainer, List } from "./styles";

function TechList() {
  const { techs } = useContext(UserContext);

  return (
    <>
      {techs.length > 0 ? (
        <List>
          {techs.map((tech: UserTech) => {
            return <TechCard tech={tech} key={tech.id} />;
          })}
        </List>
      ) : (
        <EmptyTechContainer>
          <h2>
            Por enquanto não há nenhuma tecnologia cadastrada, que tal adicionar
            uma ?
          </h2>
        </EmptyTechContainer>
      )}
    </>
  );
}

export default TechList;
