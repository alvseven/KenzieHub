import styled from "styled-components";
import "animate.css";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid #212529;
  background-color: #121214;
  animation: fadeIn 3s;

  a {
    width: 4rem;
    height: 1rem;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    font-weight: 600;
    font-family: "Inter";
    text-align: center;
    text-decoration: none;
    color: #f8f9fa;
    background-color: #212529;
    border-radius: 4px;

    :hover {
      color: #212529;
      background-color: #f8f9fa;
      animation: fadeIn 2s;
    }
  }
`;

export { HeaderContainer };
