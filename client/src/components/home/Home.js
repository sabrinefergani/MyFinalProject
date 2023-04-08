import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import SomeRecipes from "../recipes/SomeRecipes";

//Style 
const StyledH1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  padding: 20px;
  text-align: center;
  display: block;
  align-items: center;
  margin-left: 100px;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;

`;
const SuggestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  color: #4d4d4d;
`;

//Call the component for home 
const Home = () => {
  return (
    <>
      <Header />
      <StyledH1> </StyledH1>

      <SuggestionsWrapper>Suggestions</SuggestionsWrapper>
      <SomeRecipes />
    </>
  );
};

export default Home;
