import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

function Header() {
  const { clearLocalStorage } = useContext(UserContext);

  return (
    <header>
      <HeaderContainer>
        <img src={logo} alt="logo kenzie hub" />
        <Link to="/" onClick={clearLocalStorage}>
          Sair
        </Link>
      </HeaderContainer>
    </header>
  );
}

export default Header;
