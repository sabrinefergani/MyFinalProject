import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/auth";
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
const RecipeBox = styled.div`
  display: flex;
  flex-direction: row;
 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
  padding-top: 45px;
  top: 0;
  margin-left: 25px;
 margin-right: 25px;
  bottom: 0;
 
  background-position: center top;
  height: 1000vh;
  border: 5px solid black;
`;
const Heading = styled.h1`
margin-top: 0;
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
  color: black;
  z-index: 10;

  font-family: Lucida Handwriting, cursive;
  font-size: 35px;
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
  height: 1500vh;
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
const RemoveButton = styled.button`
   background-color: #4d4d4d;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #8bc34a;
  }
`;
const BackToDashboardButton = styled(Link)`
  display: block;
 
  margin-bottom: 10px;
  color: white;
  background-color: #8bc34a;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
 
  width:115px;
  height: 30px;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #4d4d4d;
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


const FavoriteRecipe = () => {
    const [dashboard, setDashboard] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDashboard = async () => {
        try {
          const user = firebase.auth().currentUser;
          if (!user) {
            console.log("User is not logged in");
            return;
          }
          const response = await fetch(
            `http://localhost:8000/api/user/id/${user.email}`
          );
          const data = await response.json();
          setDashboard(data.id);
        } catch (error) {
          console.error("There was an error fetching the dashboard:", error);
          setError("An error occurred while fetching your favorite recipes");
        }
      };
  
      fetchDashboard();
    }, []);
  
    useEffect(() => {
      const fetchRecipes = async () => {
        if (!dashboard) {
          return;
        }
        setIsLoading(true);
        const fetchedRecipes = [];
  
        for (const recipeId of dashboard) {
          try {
            const response = await fetch(
              `http://localhost:8000/api/recipes/${recipeId}`
            );
            const data = await response.json();
            fetchedRecipes.push(data.data);
          } catch (error) {
            console.error(`There was an error fetching recipe ${recipeId}:`, error);
            setError("An error occurred while fetching your favorite recipes");
          }
        }
        setIsLoading(false);
        setRecipes(fetchedRecipes);
      };
  
      fetchRecipes();
    }, [dashboard]);
    const removeFromFavorites = async (recipeId) => {
        try {
          const user = firebase.auth().currentUser;
          if (!user) {
            console.log("User is not logged in");
            return;
          }
          const idToken = await user.getIdToken();
          const response = await fetch(
            `http://localhost:8000/api/user/favorite/${recipeId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
              },
              body: JSON.stringify({
                email: user.email,
                recipeId,
              }),
            }
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            // Remove the recipe from the local state
            const index = recipes.findIndex((recipe) => recipe._id === recipeId);
            if (index !== -1) {
              const newRecipes = [...recipes];
              newRecipes.splice(index, 1);
              setRecipes(newRecipes);
            }
          } else {
            throw new Error(response.statusText);
          }
        } catch (error) {
          console.error("There was an error removing the recipe:", error);
        }
      };
      
      
    return (
        <RecipeFirst>
          
          <RecipeBox>
             <BackToDashboardButton to="/dashboard">Back to Dashboard</BackToDashboardButton>
            <div>
              <Heading>All Recipes</Heading>
              
              {recipes.map((recipe) => (
                <div key={recipe.recipeId}>
                   

                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipePhoto src={recipePhotos[recipe.name]} alt={recipe.name} />
                  <RecipeIngredient>Ingredients: {recipe.ingredient}</RecipeIngredient>
                  <RecipePreparation>Preparation: {recipe.preparation}</RecipePreparation>
          <RecipeTime>Time: {recipe.time}</RecipeTime>
          <RecipePortions>Portions: {recipe.portions}</RecipePortions>
          <RecipeRestriction>Restriction: {recipe.restriction}</RecipeRestriction>
          <RecipePreference>Preference: {recipe.dietary_preference}</RecipePreference>
          <RecipeValue>Nutritional Value:</RecipeValue>
          <RecipeValue>
            Fiber: {recipe.nutritional_value.fiber},
            Sodium: {recipe.nutritional_value.sodium},
            Protein: {recipe.nutritional_value.protein},
            Calories: {recipe.nutritional_value.calories},
            Total fat: {recipe.nutritional_value.total_fat},
            Cholesterol: {recipe.nutritional_value.cholesterol},
            Saturated Fat: {recipe.nutritional_value.saturated_fat},
            Total carbohydrates: {recipe.nutritional_value.total_carbohydrates}
          </RecipeValue>
          <RemoveButton onClick={() => removeFromFavorites(recipe._id)}>
  Remove from favorite
</RemoveButton>


        </div>
      ))}
    
    </div>
  </RecipeBox>
</RecipeFirst>
);
};
    export default FavoriteRecipe;