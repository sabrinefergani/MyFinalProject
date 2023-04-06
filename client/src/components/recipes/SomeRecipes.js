import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



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


const RecipeNameWrapper = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;
const RecipeName = styled.h2`
  color: black;
  margin: 20px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  transition: color 0.3s ease-in-out;


`;

const RecipePhotoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 95px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const RecipePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
 
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
const SomeRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/random-recipes`);

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setRecipes(data.data);
        } else {
          console.error("Error fetching recipes: ", response.status);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomRecipes();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        recipes.map((recipe) => (
          
          <RecipePhotoWrapper key={recipe._id}>
            <RecipeNameWrapper>
              <RecipeName>{recipe.title}</RecipeName>
            </RecipeNameWrapper>
            <Link to={`recipes/${recipe._id}`}>
              <RecipePhoto src={recipePhotos[recipe.name]} alt={recipe.name} />
            </Link>
            
          </RecipePhotoWrapper>
        ))
      )}
    </>
  );
};

export default SomeRecipes;
