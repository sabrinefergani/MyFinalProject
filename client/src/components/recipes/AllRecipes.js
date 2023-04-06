import React, { useEffect, useState } from "react";
import styled from "styled-components";

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


const RecipeList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
`;

const RecipeItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #F7F7F7;
`;




const RecipeDetailItem = styled.div`
  flex-basis: 33.33%;
  
`;


const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  color: #4d4d4d;
`;
const RecipePhoto = styled.img`
  width: 250px;
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  opacity: 10;
  border-radius: 15px;
`;


const RecipeTitle = styled.p`
 
  
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 20px;
  color: #4d4d4d;
`;
const RecipeIngredient = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;

`;
const RecipePreparation = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipeTime = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipePortions = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const RecipeRestriction = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;

const RecipePreference = styled.p`
   text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s ease-in-out;
  font-size: 12px;
`;
const AddToMenuButton = styled.button`
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

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("Fetching recipes...");
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/recipes`);
        const data = await response.json();
        setRecipes(data.data);
      } catch (error) {
        console.error("There was an error fetching the recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <Heading>All Recipes</Heading>
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe._id}>

<RecipeDetailItem>
  <a href={`/recipes/${recipe._id}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RecipePhoto src={recipePhotos[recipe.name]} alt={recipe.name} />
      <div style={{ marginLeft: '10px' }}>
        
      </div>
    </div>
  </a>
</RecipeDetailItem>



<RecipeTitle>{recipe.title}</RecipeTitle>

<RecipeIngredient>Ingredients:
{recipe.ingredient}
</RecipeIngredient>

<RecipePreparation>Preparation:
{recipe.preparation}
</RecipePreparation>

<RecipeTime>Time:
{recipe.time}
</RecipeTime>


<RecipePortions>Portions:
{recipe.portions}
</RecipePortions>


<RecipeRestriction>Restriction:
{recipe.restriction}
</RecipeRestriction>

<RecipePreference>Preference:
{recipe.dietary_preference}
</RecipePreference>


<AddToMenuButton>Add to Menu</AddToMenuButton>
          </RecipeItem>
        ))}
      </RecipeList>
    </div>
    
  );
};

export default AllRecipes;
