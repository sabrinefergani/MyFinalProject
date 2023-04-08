import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//Style 

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SignInBox = styled.div`
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

const ErrorMsg = styled.div`
  margin-bottom: 10px;
  color: #f44336;
  font-family: "Montserrat", sans-serif;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
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
  );
};

export default SignIn;
