import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledBar>
      <nav>
        <ul>
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

const StyledBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

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
    margin-right: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    padding-left: 100px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    position: relative;
    overflow: hidden;
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
  color: #4d4d4d;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 10px;
  &:hover {
    color: #8bc34a;
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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #689f38;
  }
`;

export default NavBar;
