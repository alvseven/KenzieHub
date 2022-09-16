import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import Header from "../../components/Header";
import AddTechContainer from "../../components/AddTechContainer";
import AddTechModal from "../../components/AddTechModal";
import TechList from "../../components/TechList";

import { Container, UserInfoContainer } from "./styles";
import EditTechModal from "../../components/EditTechModal";

function Dashboard() {
  const { userName, userModule, modalAddTechIsOpen, modalTechDetailsIsOpen } =
    useContext(UserContext);

  return (
    <Container>
      <Header />
      <UserInfoContainer>
        <h3>Olá, {userName}, como vai você?</h3>
        <p>{userModule}</p>
      </UserInfoContainer>
      <AddTechContainer />
      <TechList />
      {modalAddTechIsOpen && <AddTechModal />}
      {modalTechDetailsIsOpen && <EditTechModal />}
    </Container>
  );
}

export default Dashboard;
