import RegisterForm from "../../components/RegisterForm";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";

function Register() {
  return (
    <Container>
      <img src={logo} alt="logo kenzie hub" />
      <RegisterForm />
    </Container>
  );
}

export default Register;
