import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import AllRecipes from "../recipes/AllRecipes";
import Ingredient from "../recipes/Ingredient";
import Bar from "./Bar";

const StyledRecipes = styled.div`
  display: flex;
  background-image: url('https://thumbs.dreamstime.com/b/asian-food-cooking-wok-noodles-chicken-stir-fry-vegetables-ingredients-spices-sauces-chopsticks-dark-rustic-83701227.jpg');
  padding-top: 45px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-position: center top;
  height: 2400vh;
`;

const IngredientWrapper = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 20px;
  margin-right: 20px;
  padding-top: 35px;

`;

const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;

const Recipes = () => {
  return (
    <>
      <StyledBar>
        <Bar />
      </StyledBar>
      <StyledRecipes>
        <IngredientWrapper>
          <Ingredient />
        </IngredientWrapper>
        <AllRecipes />
      </StyledRecipes>
    </>
  );
};
export default Recipes;
