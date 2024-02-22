import { useState } from "react";
import styled from "styled-components";

const SearchSection = styled.section`
  // width: 380px;
  grid-column: 1/3;
  grid-row: 1/2;
  margin-left: 15px;
  margin-right: 30px;
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
  width: 165px;
  max-height: 40px;
  padding-inline: 24px;
  margin: 0; /* Μηδενισμός των περιθωρίων */
  box-sizing: border-box;
  border-radius: 40px;
  border: 2px solid black;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 13px;
  font-family: var(--font-body);

  padding-left: 10px;

  &::placeholder {
    color: ${(props) =>
      props.$isDayTime ? "var(--colour-gray)" : "var(--colour-black)"};
  }
  @media screen and (min-width: 600px) {
    width: 294px;
  }
`;
const Button = styled.button`
  font-size: 13px;
  width: 80px;
  background-color: var(--colour-white);
  margin: 0;
  //padding-inline: 24px;
  min-height: 40px;
  height: 40px;
  border-radius: 40px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--colour-black);
    color: var(--colour-white);
  }
  &:disabled {
    background-color: var(--colour-gray);
    cursor: not-allowed;
  }

  @media screen and (min-width: 600px) {
    width: 90px;
    // margin-left: 27px;
  }
`;

const ErrorMessage = styled.p`
  color: var(--colour-orange);
  font-size: var(p--m);
`;

export default function Search({ setCity, error, isDayTime }) {
  const [citySearch, setCitySearch] = useState("");

  const handleClick = () => {
    setCity(citySearch);
  };

  return (
    <SearchSection>
      <InputWrapper>
        <Input
          $isDayTime={isDayTime}
          placeholder="Search for a city"
          onChange={(e) => {
            setCitySearch(e.target.value);
          }}
        />
        <Button disabled={!citySearch} onClick={handleClick}>
          SEARCH
        </Button>
      </InputWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </SearchSection>
  );
}
