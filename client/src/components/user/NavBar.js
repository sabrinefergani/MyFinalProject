import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Setting bar for user 
const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {        
    try {
      await firebase.auth().signOut();  // Log out , redirect to home 
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledBar>
      <nav>
        <ul>
        <div className="logo">
  No Waste
</div>
          <StyledListItem>
            <StyledLink to="/dashBoard">DashBoard</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/contentRecipe">Recipe</StyledLink>
          </StyledListItem>
        </ul>
      </nav>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </StyledBar>
  );
};

//Style 
const StyledBar = styled.header`
 display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  background-color: transparent;
  z-index: 1;
  margin-top: 10px;
  
  .logo {
    font-family: Monaco, monospace;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    margin-left: 40px;
    margin-right:215px
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 12px;
    font-family: Monaco, monospace;
    font-size: 12px;
    font-weight:900;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: white;
      bottom: -5px;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover:before {
      transform: scaleX(1);
    }
  }
`;


const StyledListItem = styled.li`
  margin-right: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
      margin-right: 12px;
    font-family: Monaco, monospace;
    font-size: 12px;
    font-weight:900;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: green;
      bottom: -5px;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover:before {
      transform: scaleX(1);
    }
  
`;

const StyledButton = styled.button`
  background-color: #8bc34a;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 20px;
  margin-left: 740px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #689f38;
  }
`;

export default NavBar;
