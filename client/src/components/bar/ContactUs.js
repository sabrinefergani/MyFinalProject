import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";


//style
const ContactUsContainer = styled.div`
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

const ContactUsBox = styled.div`
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
  height: 300px;
  border: 5px solid black;
`;

const Title = styled.h1`
margin-right: 15px;
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
    font-size: 25px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 48px;
  color: black;
`;

const Info = styled.p`
  font-size: 18px;
  margin-left: 20px;

  font-family: Monaco, monospace;
    font-size: 15px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;
const ContactUs = () => {
  return (
    <>
    <StyledBar>
        <Bar />
      </StyledBar>
    <ContactUsContainer>
      <ContactUsBox>
        <Title>Contact Us</Title>
        <Text>
          Have a question, comment, or concern? Feel free to reach out to us using the contact information below.
        </Text>
        <IconContainer>
          <IconWrapper>
            <Icon icon={faPhone} />
            <Info>123-456-7890</Info>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={faEnvelope} />
            <Info>info@yourwebsite.com</Info>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={faMapMarkerAlt} />
            <Info>123 Main St, Anytown USA</Info>
          </IconWrapper>
        </IconContainer>
      </ContactUsBox>
    </ContactUsContainer>
    </>
  );
};

export default ContactUs;
