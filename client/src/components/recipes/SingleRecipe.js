import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Link } from 'react-router-dom';


import asparagus from "../asset/asparagus.jpg";
import beans from "../asset/beans.jpg";
import brocoli from "../asset/brocoli.jpeg";
import carrot from "../asset/carrot.jpg";
import cauliflower from "../asset/cauliflower.jpg";
import celery from "../asset/celery.avif";
import cucumber from "../asset/cucumber.jpg";
import eggplant from "../asset/eggplant.jpg";
import garlic from "../asset/garlic.jpg";
import kale from "../asset/kale.jpg";
import lettuce from "../asset/lettuce.jpg";
import mushroom from "../asset/mushroom.jpg";
import onion from "../asset/onion.jpg";
import patato from "../asset/patato.jpg";
import peppers from "../asset/peppers.jpg";
import radish from "../asset/radish.jpg";
import spinach from "../asset/spinach.jpg";
import sweetpatato from "../asset/sweetpatato.jpg";
import tomato from "../asset/tomato.jpg";
import Zucchini from "../asset/Zucchini.jpg";


//Style
const RecipeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
  border-radius: 5px;
  margin: 150px;
  margin-top: 15px;
  height:900px ;
  width: 1300px;
  border: 5px solid black;
  
`;
const RecipeFirst = styled.div`
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


const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 55px;
`;

const RecipePhoto = styled.img`
  margin-bottom: 20px;
  opacity: 10;
  border: 2px solid black;
  width: 225px;
  height: 225px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: 5px solid black;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipeTitle = styled.p`
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 24px;
  color: #4d4d4d;
`;
const RecipeIngredient = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;

`;
const RecipePreparation = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipeTime = styled.p`
    text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipePortions = styled.p`
    text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipeRestriction = styled.p`
    text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;

const RecipePreference = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipeValue = styled.p`
    text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Lucida Handwriting, cursive;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const AddToMenuButton = styled(Link)`
  background-color: #4d4d4d;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 25px;
  &:hover {
    background-color: #8bc34a;
  }

`;

// setting photo link 
const recipePhotos = {
  'Asparagus': asparagus,
  'Beans': beans,
  'Brocoli': brocoli,
  'Carrot': carrot,
  'Cauliflower': cauliflower,
  'Celery': celery,
  'Cucumber': cucumber,
  'Eggplant': eggplant,
  'Garlic': garlic,
  'Kale': kale,
  'Lettuce': lettuce,
  'Mushroom': mushroom,
  'Onion': onion,
  'Patato': patato,
  'Peppers': peppers,
  'Radish': radish,
  'Spinach': spinach,
  'Sweetpatato': sweetpatato,
  'Tomato': tomato,
  'Zucchini': Zucchini,
};

//fetch One single recipe 
const SingleRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data.data); 
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    

    fetchRecipe();
  }, [[id]]);

  return (
    <RecipeFirst>
    <RecipeBox>
      {recipe ? (
        <>
         
          <RecipeDetails>
  <RecipePhoto src={recipePhotos[recipe.name]} alt={recipe.name} />

  <RecipeTitle>{recipe.title}</RecipeTitle>

  <RecipeIngredient>Ingredients: {recipe.ingredient}</RecipeIngredient>

  <RecipePreparation>Preparation: {recipe.preparation}</RecipePreparation>

  <RecipeTime>Time: {recipe.time}</RecipeTime>

  <RecipePortions>Portions: {recipe.portions}</RecipePortions>

  <RecipeRestriction>Restriction: {recipe.restriction}</RecipeRestriction>

  <RecipePreference>Preference: {recipe.dietary_preference}</RecipePreference>

  <RecipeValue>
    Nutritional Value : 
    Fiber: {recipe.nutritional_value.fiber},
    Sodium: {recipe.nutritional_value.sodium},
    Protein: {recipe.nutritional_value.protein},
    Calories: {recipe.nutritional_value.calories},
    Total fat: {recipe.nutritional_value.total_fat},
    Cholesterol: {recipe.nutritional_value.cholesterol},
    Saturated Fat: {recipe.nutritional_value.saturated_fat},
    Total carbohydrates: {recipe.nutritional_value.total_carbohydrates},
  </RecipeValue>

  <AddToMenuButton to="/recipes">Go back to recipes !</AddToMenuButton>
</RecipeDetails>
        </>
      ) : (
        <p>Loading...</p>
      )}
       
    </RecipeBox>
    </RecipeFirst>
  );
};

export default SingleRecipe; 