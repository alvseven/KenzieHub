import styled from "styled-components";
import "animate.css";

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;

  h4 {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Noto Sans", sans-serif;
    color: #ffe4fa;
    text-align: center;
    letter-spacing: 2px;
  }

  @media (min-width: 688px) {
    justify-content: space-around;
    width: 90%;

    h4 {
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
  }
`;

const AddButton = styled.button`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #2ceaa3;
  background-color: #212325;
  border: 1px double #2ceaa9;
  border-radius: 4px;

  :hover {
    transition: 600ms;
    color: #212325;
    background-color: #2ceaa3;
    border: 1px solid transparent;
  }
`;

export { AddButton, AddContainer };
