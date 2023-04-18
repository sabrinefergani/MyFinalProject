import React, { useState, useContext, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Bar from "./Bar";


// Setting firebaseConfig 
const firebaseConfig = {
  apiKey: "AIzaSyDFCpTlP06Qw4caxNb5w7pL7UZnmkRTqH0",
  authDomain: "myfinalproject-e7dcb.firebaseapp.com",
  projectId: "myfinalproject-e7dcb",
  storageBucket: "myfinalproject-e7dcb.appspot.com",
  messagingSenderId: "503105405142",
  appId: "1:503105405142:web:e66926683cc2a5e326c977",
  measurementId: "G-970V0GCENZ"
};

firebase.initializeApp(firebaseConfig);

//Style 
const SignUpContainer = styled.div`
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
const SignInLink = styled.div`
  font-size: 16px;
 margin-top: 25px;

  text-align: center;
  font-family: "Montserrat", sans-serif;
 
`;

const SignUpBox = styled.div`


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
 margin-top: 55px;
  text-align: center;
  font-family: Monaco, monospace;
    font-size: 25px;
    font-weight:900;
    text-transform: uppercase;
    color: black;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #8bc34a;
  color: #fff;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;
const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  z-index: 1;
  border-bottom: 1px solid #ddd;
`;

// Setting the form to signUp 
const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: username,
      });

      await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: firebase.auth().currentUser.email,
          displayName: firebase.auth().currentUser.displayName,
        }),
      });

      setUser({
        displayName: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
      });

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };


  
  // return the input field
  return (
   
    <>
    <StyledBar>
        <Bar />
      </StyledBar>
      <UserContext.Provider value={{ user, setUser }}>
    <SignUpContainer>
      <SignUpBox>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Username</Label>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputWrapper>
          <Button type="submit">Sign Up</Button>
        </form>
        <SignInLink>
          Already have an account? <Link to="/signin">Sign In</Link>
        </SignInLink>
      </SignUpBox>
    </SignUpContainer>
    </UserContext.Provider>
    </>
  );
};

export default SignUp;