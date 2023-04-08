import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// delimiting the element in bar // setting where bar will not appear 
const Bar = () => {
  const location = useLocation();

  if (location.pathname === "/dashBoard"||location.pathname === "/contentRecipe"|| location.pathname.startsWith("/getRecipe/")) {
    return null;
  }
  return (
    <StyledBar>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/composting">Composting</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
           <li >
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li >
            <Link to="/signIn">Sign in </Link>
          </li>
          <li>
            <Link to="/signUp">Sign up </Link>
          </li>
        
        </ul>
      </nav>
      <div className="social-icons">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </StyledBar>

  );
};

//style 
const StyledBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
  
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    position: relative;
    overflow: hidden;
  }

  a {
    color: #4d4d4d;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    padding: 10px;
    display: block;
  }

  a:hover {
    color: #8bc34a;
  }

  .social-icons {
    display: flex;
    align-items: center;
    margin-right: 96px;
    
  }

  .social-icons a {
    color: #4d4d4d;
    font-size: 7px;
    margin-right: 2px;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #8bc34a;
  }
`;

export default Bar;
