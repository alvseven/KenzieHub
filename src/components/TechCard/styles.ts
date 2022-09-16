import styled, { css } from "styled-components";
import "animate.css";

interface ColorProps {
  status: string;
}

const TechListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.7rem;
  background-color: #735cdd;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  animation: backInLeft 3s;

  :hover {
    transition: 700ms;
    background-color: #121214;
    border: 1px solid blueviolet;
  }

  h5 {
    max-width: 55%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Inter";
    color: #c2eabd;
    word-wrap: break-word;
  }

  span {
    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Nunito", sans-serif;
    ${({ status }: ColorProps) =>
      status === "Avançado"
        ? css`
            color: #5adbff;
          `
        : status === "Intermediário"
        ? css`
            color: #f68e5f;
          `
        : css`
            color: #f9c80e;
          `}
  }
`;

export { TechListItem };
