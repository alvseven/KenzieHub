import styled from "styled-components";
import "animate.css";

const ModalInner = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(180, 166, 166, 0.2);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50%;
  position: fixed;
  top: 25%;
  left: calc(50% - 140px);
  animation: zoomIn 1.5s;

  @media (min-width: 524px) {
    width: 450px;
    left: calc(50% - 225px);
  }
`;

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background-color: #343b41;

  h5 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Inter";
    color: #f8f9fa;
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Nunito";
    color: #868e96;
    background-color: #343b41;
    border: none;
  }
`;

const RegisterTechForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  padding: 1rem;
  background-color: #212529;
  border-radius: 3.2px;

  label {
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f9fa;
  }

  input {
    height: 2rem;
    padding: 0 0.4rem;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Inter";
    color: #7cfef0;
    background-color: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3.2px;
    outline: none;
  }

  select {
    height: 2rem;
    padding: 0 0.4rem;
    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f8f8;
    background-color: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3.2px;
    outline: none;
  }

  button {
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Roboto Mono", monospace;
    color: #f8f9fa;
    background-color: #12b886;
    border: 1.3px solid #12b886;
    border-radius: 4px;

    :hover {
      transition: 800ms;
      color: #12b886;
      background-color: #f8f9fa;
    }
  }
`;

const Error = styled.span`
  font-size: 0.7rem;
  font-family: "Nunito", sans-serif;
  color: #ff6961;
`;

export { ModalInner, ModalContainer, CloseContainer, RegisterTechForm, Error };
