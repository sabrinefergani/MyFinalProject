import React from "react";
import styled from "styled-components";
import Bar from "./Bar";
// style 
const AboutContainer = styled.div`
   display: flex;
  background-image: url('https://thumbs.dreamstime.com/b/asian-food-cooking-wok-noodles-chicken-stir-fry-vegetables-ingredients-spices-sauces-chopsticks-dark-rustic-83701227.jpg');
  padding-top: 45px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-position: center top;
  height: 2400vh;
`;

const AboutBox = styled.div`
  margin-top: 150px;
margin-right:150px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-left: 150px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 1075px;
  height: 250px;
  border: 5px solid black;
`;

const Title = styled.h1`
  font-size: 25px;
 margin-top: 15px;
  text-align: center;
  font-family: Monaco, monospace;
    font-size: 25px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;

const Text = styled.p`
 font-size: 24px;
  text-align: center;
  margin-bottom: 25px;
  font-family: Monaco, monospace;
    font-size: 20px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;

const Button = styled.button`
  background-color:  #4d4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #8bc34a;
  }
`;
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;
const AboutUs = () => {
  return (
    <>
     <StyledBar>
        <Bar />
      </StyledBar>
    <AboutContainer>
      <AboutBox>
        <Title>About Us</Title>
        <Text>
          At our website, we believe in reducing food waste and promoting sustainability through quick and easy recipes and composting. We aim to provide delicious and nutritious meal ideas that utilize ingredients that might otherwise go to waste. We also offer tips and resources for composting, so you can turn your food scraps into nutrient-rich soil for your garden. Join us in our mission to reduce food waste and protect the planet!
        </Text>
        <Button>Learn More</Button>
      </AboutBox>
    </AboutContainer>
    </>
  );
};

export default AboutUs;
