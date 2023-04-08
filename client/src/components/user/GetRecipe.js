import React from "react";
import styled from "styled-components";
import AllRecipes from "../recipes/AllRecipes";
import GetIngredient from "../user/GetIngredient";
import { useNavigate } from "react-router-dom";

const StyledRecipes = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  position: relative;
`;

const IngredientWrapper = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 20px;
  margin-right: 20px;
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #8bc34a;
  color: #fff;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;

const GetRecipe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashBoard");
  };

  return (
    <StyledRecipes>
      <IngredientWrapper>
        <GetIngredient />
      </IngredientWrapper>
      <AllRecipes />
      <BackButton onClick={handleClick}>Back to Dashboard</BackButton>
    </StyledRecipes>
  );
};

export default GetRecipe;
