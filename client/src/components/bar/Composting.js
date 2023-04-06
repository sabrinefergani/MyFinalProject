import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";


const CompostingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const CompostingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 1075px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
`;

const Text = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
`;

const Icon = styled.i`
  font-size: 48px;
  margin-bottom: 30px;
  color: #8bc34a;
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

const Composting = () => {
  return (
    <CompostingContainer>
      <CompostingBox>
        <Icon className="fas fa-seedling"></Icon>
        <Title>Composting</Title>
        <Text>
          Did you know that food scraps and yard waste make up 30% of what we throw away? Composting is an easy way to turn that waste into nutrient-rich soil for your garden. Not sure how to get started? We've got you covered with tips and resources for composting at home!
        </Text>
        <Button>Get Started</Button>
      </CompostingBox>
    </CompostingContainer>
  );
};

export default Composting;
