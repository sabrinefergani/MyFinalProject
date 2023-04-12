import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

// Style
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
  background-color: #f7f7f7;
  border: 5px solid black;
`;

const RecipeDetailItem = styled.div`
  flex-basis: 33.33%;
`;

const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
  color: white;

  font-family: Lucida Handwriting, cursive;
  font-size: 35px;
`;
const RecipePhoto = styled.img`
 
 
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

  line-height: 1.5;
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

// create a name for photo
const recipePhotos = {
  Asparagus: asparagus,
  Beans: beans,
  Brocoli: brocoli,
  Carrot: carrot,
  Cauliflower: cauliflower,
  Celery: celery,
  Cucumber: cucumber,
  Eggplant: eggplant,
  Garlic: garlic,
  Kale: kale,
  Lettuce: lettuce,
  Mushroom: mushroom,
  Onion: onion,
  Patato: patato,
  Peppers: peppers,
  Radish: radish,
  Spinach: spinach,
  Sweetpatato: sweetpatato,
  Tomato: tomato,
  Zucchini: Zucchini,
};

// Setting the recipe // fetch them
const ToAllRecipes = () => {
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

  // return info for  recipe
  return (
    
    <div>
      <Heading>All Recipes</Heading>
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe._id}>
            <RecipeDetailItem>
              <a href={`/getRecipe/${recipe._id}`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RecipePhoto
                    src={recipePhotos[recipe.name]}
                    alt={recipe.name}
                  />
                  <div style={{ marginLeft: "10px" }}></div>
                </div>
              </a>
            </RecipeDetailItem>

            <RecipeTitle>{recipe.title}</RecipeTitle>

            <RecipeIngredient>
              Ingredients:
              {recipe.ingredient}
            </RecipeIngredient>

            <RecipePreparation>
              Preparation:
              {recipe.preparation}
            </RecipePreparation>

            <RecipeTime>
              Time:
              {recipe.time}
            </RecipeTime>

            <RecipePortions>
              Portions:
              {recipe.portions}
            </RecipePortions>

            <RecipeRestriction>
              Restriction:
              {recipe.restriction}
            </RecipeRestriction>

            <RecipePreference>
              Preference:
              {recipe.dietary_preference}
            </RecipePreference>

            <RecipeValue>Nutritional Value : </RecipeValue>
            <RecipeValue>
              Fiber :{recipe.nutritional_value.fiber}, Sodium :
              {recipe.nutritional_value.sodium}, Protein:
              {recipe.nutritional_value.protein}, Calories :
              {recipe.nutritional_value.calories}, Total fat:
              {recipe.nutritional_value.total_fat}, Cholesterol:
              {recipe.nutritional_value.cholesterol}, Saturated Fat :
              {recipe.nutritional_value.saturated_fat}, Total carbohydrates:
              {recipe.nutritional_value.total_carbohydrates},
            </RecipeValue>
          </RecipeItem>
        ))}
      </RecipeList>
    </div>
  );
};

export default ToAllRecipes;
