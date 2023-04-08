import React from "react";
import styled from "styled-components";
import AllRecipes from "../recipes/AllRecipes";
import Ingredient from "../recipes/Ingredient";

// style  
const StyledRecipes = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

const IngredientWrapper = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 20px;
  margin-right: 20px;
`;

// call on component to render The recipe 
const Recipes = () => {
  return (
    <StyledRecipes>
      <IngredientWrapper>
        <Ingredient />
      </IngredientWrapper>
      <AllRecipes />
     
    </StyledRecipes>
  );
};

export default Recipes;
