import LoginForm from "../../components/LoginForm";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <img src={logo} alt="logo kenzie hub" />
      <LoginForm />
    </Container>
  );
}

export default Home;
