import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import axios from "axios";

// Style 
const CompostingContainer = styled.div`
 display: flex;
  background-image: url('https://thumbs.dreamstime.com/b/asian-food-cooking-wok-noodles-chicken-stir-fry-vegetables-ingredients-spices-sauces-chopsticks-dark-rustic-83701227.jpg');
  padding-top: 45px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-position: center top;
  height: 200vh;
  
  
`;
const RecipeBox = styled.div`
margin-top: 100px;
margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #F7F7F7;
  border-radius: 15px;
  border: 5px solid black;
  
 
  height:1000px ;
  width: 1200px;
 
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const RecipeTitle = styled.h2`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 24px;
  color: #4d4d4d;
`;

const RecipeImage = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  opacity: 10;
  border: 5px solid black;
`;

const RecipeInstructions = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;

  line-height: 1.5;
`;

const RecipeIngredients = styled.p`
 text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
`;


const Button = styled.button`
margin-right: 65px;
margin-left: 10px;
  background-color:black;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }
`;
const Message = styled.p`
  font-size: 10px;
  text-align: center;
  margin-bottom: 25px;
  font-family: Monaco, monospace;
    font-size: 25px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
 
`;

//Setting the dashboard for the user 
const DashBoard = () => {
  const [recipe, setRecipe] = useState(null);

  const getRandomRecipe = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
      setRecipe(response.data.meals[0]);
    } catch (error) {
      console.error(`Error retrieving random recipe: ${error.message}`);
    }
  };

  return (
    <>
    <StyledBar>
      <NavBar />
      </StyledBar>
      <CompostingContainer>
      <RecipeBox>
      <Message>Welcome to the Recipe Dashboard! Click the button below to get a random recipe.</Message>
        {recipe && (
          <RecipeContainer>
            <RecipeTitle>{recipe.strMeal}</RecipeTitle>
            <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
            <RecipeInstructions>{recipe.strInstructions}</RecipeInstructions>
            <RecipeIngredients>Ingredients: {recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, ...</RecipeIngredients>
          </RecipeContainer>
        )}
        <ButtonContainer>
  <Button onClick={getRandomRecipe}>Get Random Recipe</Button>
</ButtonContainer>

      </RecipeBox>
      </CompostingContainer>
    </>
  );
};

export default DashBoard;
