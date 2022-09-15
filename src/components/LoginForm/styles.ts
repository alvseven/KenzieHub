import styled from "styled-components";
import "animate.css";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 65%;
  max-width: 450px;
  gap: 1rem;
  padding: 2rem;
  background-color: #212529;
  border-radius: 4px;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    color: #f8f9fa;
    text-align: center;
  }

  .email-container {
    display: flex;
    align-items: center;
    background-color: #343b41;
    border-radius: 4px;
  }

  .password-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #343b41;
    border-radius: 4px;
  }

  label {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f9fa;
  }

  #email {
    width: 100%;
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

  #password {
    width: 85%;
    height: 2.5rem;
    padding: 0 0.9rem;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Inter";
    color: #f8f9fa;
    background-color: #343b41;
    border-width: 0;
    border-radius: 4px;
    outline: none;
  }

  #password-visibility {
    margin-right: 0.5rem;
    background-color: #343b41;
    border: none;

    svg {
      font-size: 20px;
      color: #ffffff;
    }
  }

  a {
    font-family: "Inter";
    font-size: 0.8rem;
    font-weight: 600;
    color: #868e96;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.6px;
  }

  #login-button {
    width: 100%;
    height: 2rem;
    font-family: "Inter";
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #ff577f;
    border: 1.3px solid #ff577f;
    border-radius: 4px;

    :hover {
      transition: 500ms;
      color: #ff577f;
      background-color: #f8f9fa;
    }
  }
`;

const Error = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 0.7rem;
  color: #ff6961;
`;

export { Error, FormContainer };
