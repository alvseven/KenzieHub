import RegisterForm from "../../components/RegisterForm";

import { Container } from "./styles";

function Register() {
  return (
    <Container>
      <img src="./src/assets/logo.svg" alt="logo kenzie hub" />
      <RegisterForm />
    </Container>
  );
}

export default Register;
