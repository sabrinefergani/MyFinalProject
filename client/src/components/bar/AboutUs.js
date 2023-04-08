import React from "react";
import styled from "styled-components";

// style 
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
  text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
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

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <Title>About Us</Title>
        <Text>
          At our website, we believe in reducing food waste and promoting sustainability through quick and easy recipes and composting. We aim to provide delicious and nutritious meal ideas that utilize ingredients that might otherwise go to waste. We also offer tips and resources for composting, so you can turn your food scraps into nutrient-rich soil for your garden. Join us in our mission to reduce food waste and protect the planet!
        </Text>
        <Button>Learn More</Button>
      </AboutBox>
    </AboutContainer>
  );
};

export default AboutUs;
