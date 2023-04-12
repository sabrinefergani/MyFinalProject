import React from "react";
import styled from "styled-components";
import Bar from "../bar/Bar";
import SomeRecipe from "../recipes/SomeRecipes";

const StyledWrapper = styled.div`
  background-image: url('https://media.istockphoto.com/id/1423585338/photo/cooking-fresh-vegetables-the-chef-adds-salt-to-a-steaming-hot-pan-grande-cuisine-idea-for-a.jpg?b=1&s=170667a&w=0&k=20&c=SoRP-7AvjWZJ1iPtLfkTQb7FI_pt_7rXlqqH52h1AKw=');
  background-position: center top;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 50px;
  border: 3px solid black;
  
`;

const StyledMessage = styled.div`
  color: white;
  margin-left: 55px;
  margin-top:100px;
  font-family: Lucida Handwriting, cursive;
  font-size: 15px;
  text-align: center;
  position: absolute;
  top:45%;
  left: 35%;
  transform: translate(-50%, -50%);
`;

const StyledSomeRecipe = styled.div`

  margin-right: 55px ;
`;

const StyledContainer = styled.div`
  display: block;
  flex-direction: column;
  min-height: 100vh;

`;
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;
const Home = () => {
  return (
    <>
    <StyledBar>
        <Bar />
      </StyledBar>
      <StyledContainer>
        <StyledWrapper>
          
          <StyledMessage>
            <p>"Welcome to No Waste, where we believe that every bit of food counts. We are passionate about reducing food waste and promoting sustainable living. Discover delicious recipes that utilize leftover ingredients, learn how to compost and reduce food waste, and join us in our mission to make the world a better place, one meal at a time."</p>
          </StyledMessage>
        </StyledWrapper>
      </StyledContainer>
      <StyledSomeRecipe>
        <SomeRecipe />
      </StyledSomeRecipe>
    </>
  );
};

export default Home;
