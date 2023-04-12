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
        <div className="logo">
  No Waste
</div>
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
           <li className="aboutUs" >
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="signIn">
            <Link to="/signIn">Sign in </Link>
          </li>
          <li className="signUp">
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
  .signUp{
    font-family: Monaco, monospace;
 
  font-size: 12px;
    font-weight:900;

  }
.signIn {
  font-size: 12px;
    font-weight:900;
    font-family: Monaco, monospace;
  
}
  .aboutUs{

    margin-right: 280px;
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

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    display: block;
    padding: 10px;
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
    color: white;
    font-size: 7px;
    margin-right: 2px;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #8bc34a;
  }
`;

export default Bar;
