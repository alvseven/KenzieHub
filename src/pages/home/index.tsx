import LoginForm from "../../components/LoginForm";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <img src="./src/assets/logo.svg" alt="logo kenzie hub" />
      <LoginForm />
    </Container>
  );
}

export default Home;
