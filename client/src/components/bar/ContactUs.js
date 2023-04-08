import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";


//style
const ContactUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ContactUsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  color: #8bc34a;
`;

const Info = styled.p`
  font-size: 18px;
  margin-left: 20px;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
`;

const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;
