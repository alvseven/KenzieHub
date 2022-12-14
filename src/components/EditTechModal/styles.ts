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
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  height: 4rem;
  background: #343b41;
  padding: 0 0.5rem;

  h5 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.1rem;
    color: #f8f9fa;
  }

  button {
    font-family: "Nunito";
    font-weight: 600;
    font-size: 0.75rem;
    color: #868e96;
    background: #343b41;
    border: none;
  }
`;

const EditTechForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: #212529;
  border-radius: 3.2px;
  box-shadow: 0px 3.2px 32px -8px rgba(0, 0, 0, 0.25);

  label {
    font-family: "Inter";
    font-size: 0.6rem;
    font-weight: 400;
    color: #f8f9fa;

    @media (min-width: 524px) {
      font-size: 1.1rem;
    }
  }

  input {
    height: 2rem;
    padding: 0 0.4rem;
    font-family: "Inter";
    font-size: 0.9rem;
    font-weight: 400;
    color: #868e96;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid slategray;
    border-radius: 3.2px;
    outline: none;
    cursor: no-drop;
  }

  select {
    height: 2rem;
    padding: 0 0.4rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.85rem;
    color: #f8f8f8;
    background-color: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3.2px;
  }

  button {
    height: 2rem;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;
    font-weight: 500;
    color: #000;
    background-color: #2ceaa3;
    border: 1.3px solid #2ceaa3;
    border-radius: 4px;

    :hover {
      transition: 500ms;
      color: #2ceaa3;
      background-color: #212922;
    }

    @media (min-width: 524px) {
      height: 2.2rem;
      font-size: 1.2rem;
    }
  }

  button + button {
    height: 2rem;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;
    font-weight: 500;
    color: #f1e4f3;
    background-color: #6564db;
    border: 1.3px solid #6564db;
    border-radius: 4px;

    :hover {
      transition: 500ms;
      color: #6564db;
      background-color: #f1e4f3;
    }

    @media (min-width: 524px) {
      height: 2.2rem;
      font-size: 1.2rem;
    }
  }
`;

export { ModalInner, ModalContainer, CloseContainer, EditTechForm };
