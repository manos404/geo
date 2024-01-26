import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 380px;
  grid-row: 1/2;
  grid-column: 1/3;
  //border: 5px solid var(--colour-black);
  height: 35px;
  margin-left: 34px;

  @media screen and (min-width: 600px) {
    margin-left: 101px;
    width: 418px;
    height: 39px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Input = styled.input`
  width: 190px;
  height: 100%;
  margin: 0; /* Μηδενισμός των περιθωρίων */
  box-sizing: border-box;
  border-radius: 50px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  font-family: var(--font-body);
  padding-left: 10px;
  @media screen and (min-width: 600px) {
    width: 294px;
  }
`;
const Button = styled.button`
  margin: 0; /* Μηδενισμός των περιθωρίων */
  box-sizing: border-box;

  margin-left: 28px;

  width: 90px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  // padding: 10px 15px;
  //margin-left: 30px;
  transition: background-color 0.3s;
  //font-size: 17px;

  &:hover {
    background-color: var(--colour-black);
    color: var(--colour-white);
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  @media screen and (min-width: 600px) {
    width: 97px;
    margin-left: 27px;
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
