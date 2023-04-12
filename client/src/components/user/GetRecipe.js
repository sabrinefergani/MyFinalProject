import React from "react";
import styled from "styled-components";
import ToAllRecipes from "./ToAllRecipe";
import GetIngredient from "../user/GetIngredient";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

//Style 
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

const BackButton = styled.button`
  position: absolute;
  top: 185px;
 margin-right: 15px;
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
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;

// remake of Recipe page but for User
const GetRecipe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashBoard");
  };

  return (
    <>
    <StyledBar>
      <NavBar />
    </StyledBar>
    <StyledRecipes>
      <IngredientWrapper>
        <GetIngredient />
      </IngredientWrapper>
      <ToAllRecipes />
      <BackButton onClick={handleClick}>Back to Dashboard</BackButton>
    </StyledRecipes>
    </>
  );
};

export default GetRecipe;
