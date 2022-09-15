import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import Header from "../../components/Header";
import AddTechContainer from "../../components/AddTechContainer";
import AddTechModal from "../../components/AddTechModal";

import { UserInfoContainer } from "./styles";

function Dashboard() {
  const { userName, userModule, modalAddIsOpen } = useContext(UserContext);

  return (
    <>
      <Header />
      <UserInfoContainer>
        <h3>Olá, {userName}, como vai você?</h3>
        <p>{userModule}</p>
      </UserInfoContainer>
      <AddTechContainer />
      {modalAddIsOpen && <AddTechModal />}
    </>
  );
}

export default Dashboard;
