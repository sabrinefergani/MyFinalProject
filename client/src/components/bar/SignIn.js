import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bar from "./Bar";

//Style 

const SignInContainer = styled.div`
  display: flex;
  background-image: url('https://img.freepik.com/premium-photo/black-stone-cooking-background-spices-vegetables-top-view-free-space-your-text-generative-ai_410516-988.jpg');
 background-size: 100%;
  top:0px;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-position: center top;
  height:140vh;
  background-repeat: no-repeat;
`;

const SignInBox = styled.div`

  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-left: 350px;
  margin-top: 150px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width:500px;
  height: 500px;
  border: 5px solid black;
`;

const Title = styled.h1`

  font-size: 25px;
 margin-top: 110px;
  text-align: center;
  font-family: Monaco, monospace;
    font-size: 25px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;

const ErrorMsg = styled.div`
  margin-bottom: 10px;
  color: #f44336;
  font-family: Monaco, monospace;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-family: Monaco, monospace;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.button`
  background-color: #4d4d4d;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
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

// Set in the email and password to connect 
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/dashBoard");
    } catch (error) {
      setError(error.message);
    }
  };
// returning the input field  
  return (
    <>
    <StyledBar>
        <Bar />
      </StyledBar>
    <SignInContainer>
      <SignInBox>
        <Title>Sign In</Title>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Button type="submit">Sign In</Button>
        </form>
      </SignInBox>
    </SignInContainer>
    </>
  );
};

export default SignIn;
