import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";


// Style 
const RecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #F7F7F7;
  border-radius: 15px;
  margin: 150px;
  margin-top: 15px;
  height:700px ;
  width: 1100px;
  animation: colorChange 5s linear infinite;
  
  @keyframes colorChange {
    0% {
      background-color: #F7F7F7;
    }
    50% {
      background-color: #81C784;
    }
    100% {
      background-color: #F7F7F7;
    }
  }
`;


const Message = styled.p`
  font-size: 24px;
  color: #666;
  margin-top: 50px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

//Setting the dashboard for the user 
const DashBoard = () => {

  return (
    <>
      <NavBar />
      <RecipeBox>
        <Message>The dashboard is currently under construction!</Message>
      </RecipeBox>
    </>
  );
};

export default DashBoard;
