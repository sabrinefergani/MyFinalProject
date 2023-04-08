import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


// Style 
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const DropdownTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
`;

const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
  color: #333;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`;

const DropdownOption = styled.option`
  font-size: 16px;
  font-weight: bold;
`;

const GoToRecipeButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #2196f3;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8bc34a;
  }
`;

// Setting the dropdown For name 
const Ingredient = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/recipes/names");
        const data = await response.json();
        const sortedRecipes = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setRecipes(sortedRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleChange = (event) => {
    setSelectedRecipe(event.target.value);
  };

  
  return (
    <DropdownContainer>
      <DropdownTitle>Select a Recipe:</DropdownTitle>
      <Dropdown value={selectedRecipe} onChange={handleChange}>
        <DropdownOption value="" disabled>Select a recipe...</DropdownOption>
        {recipes.map(recipe => (
          <DropdownOption key={recipe._id} value={recipe._id}>{recipe.name}</DropdownOption>
        ))}
      </Dropdown>
      {selectedRecipe && (
        <Link to={`/recipes/${selectedRecipe}`}>
          <GoToRecipeButton>Go to Recipe</GoToRecipeButton>
        </Link>
      )}
    </DropdownContainer>
  );
};

export default Ingredient;
