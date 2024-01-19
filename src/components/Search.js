import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-row: 1/2;
  //justify-items: start;

  border: 1px solid var(--colour-black);
  width: 100vw;
`;

const Input = styled.input`
  width: 220px;
  border: 2px solid var(--colour-black);
  border-radius: 50px;
  padding: 10px 15px;
  margin-left: 34px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  font-family: var(--font-body);

  @media screen and (min-width: 768px) {
    border-radius: 150px;
  }
`;
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50px;
  padding: 10px 15px;
  margin-left: 30px;
  transition: background-color 0.3s;
  font-size: 17px;

  &:hover {
    background-color: var(--colour-black);
    color: var(--colour-white);
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export default function Search({ setCity }) {
  const [citySearch, setCitySearch] = useState("");

  const handleClick = () => {
    setCity(citySearch);
  };

  return (
    <Div>
      <Input
        placeholder="Search for a city"
        onChange={(e) => {
          setCitySearch(e.target.value);
        }}
      />
      <Button onClick={handleClick}>Search</Button>
    </Div>
  );
}
