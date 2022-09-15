import styled from "styled-components";
import "animate.css";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 65%;
  max-width: 450px;
  padding: 2rem;
  background-color: #212529;
  border-radius: 4px;
  animation: bounceInDown 1.5s;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    color: #f8f9fa;
    text-align: center;
  }

  label {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f9fa;
  }

  input {
    height: 2.5rem;
    padding: 0 0.9rem;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f9fa;
    background-color: #343b41;
    border-radius: 4px;
    border-width: 0;
    outline: none;
  }

  a {
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Inter";
    color: #868e96;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.6px;
  }

  button {
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Inter";
    color: #ffffff;
    background-color: #59323f;
    border: 1.3px solid #59323f;
    border-radius: 4px;

    :hover {
      transition: 500ms;
      color: #59323f;
      background-color: #f8f9fa;
    }

    @media (min-width: 524px) {
      height: 2.2rem;
      font-size: 1.2rem;
    }
  }

  select {
    height: 2.2rem;
    padding-left: 0.9rem;
    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Inter";
    color: #868e96;
    background-color: #343b41;
  }
`;

const Error = styled.span`
  font-size: 0.7rem;
  font-family: "Nunito", sans-serif;
  color: #ff6961;
`;

export { Error, FormContainer };
