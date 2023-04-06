import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import SingleRecipe from "../recipes/SingleRecipe";
import SomeRecipes from "../recipes/SomeRecipes";

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

const Home = () => {
  return (
    <>
      <Header />
      <StyledH1> </StyledH1>
      <SomeRecipes />
    </>
  );
};

export default Home;
