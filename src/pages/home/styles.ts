import styled from "styled-components";
import "animate.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  animation: fadeIn 3s;

  img {
    width: 125px;
    height: 20px;
    margin-top: 5rem;
  }
`;

export { Container };
