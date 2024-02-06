import { useState } from "react";
import styled from "styled-components";

const SearchSection = styled.section`
  // width: 380px;
  grid-column: 1/3;
  grid-row: 1/2;
  margin-left:30px;
  margin-right:30px;
  //padding-left:10px;
  //border: 5px solid var(--colour-black);
  // height: 35px;
  // margin-left: 34px;

  @media screen and (min-width: 600px) {
    //margin-left: 101px;
    // width: 418px;
    // height: 39px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  height: 40px;
  width:165px;
  max-height: 40px;
  padding-inline: 24px;
  margin: 0; /* Μηδενισμός των περιθωρίων */
  box-sizing: border-box;
  border-radius: 40px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 13px;
  font-family: var(--font-body);

  padding-left: 10px;

  @media screen and (min-width: 600px) {
    // width: 294px;
  }
`;
const Button = styled.button`
  font-size: 13px;
  width:80px;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  //padding-inline: 24px;
  min-height: 40px;
  height: 40px;
  border-radius: 40px;
  //border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--colour-black);
    color: var(--colour-white);
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  @media screen and (min-width: 600px) {
    // width: 97px;
    // margin-left: 27px;
  }
`;

const ErrorMessage=styled.p`
color: var(--colour-orange);
font-size:var( p--m);
`

export default function Search({ setCity,error }) {
  const [citySearch, setCitySearch] = useState("");

  const handleClick = () => {
    setCity(citySearch);
  };

  return (
    <SearchSection>
      <InputWrapper>
        <Input
          placeholder="Search for a city"
          onChange={(e) => {
            setCitySearch(e.target.value);
          }}
        />
        <Button onClick={handleClick}>Search</Button>
      </InputWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </SearchSection>
  );
}
