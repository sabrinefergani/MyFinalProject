import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const SignInLink = styled.div`
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const SignUpBox = styled.div`
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  color: #4d4d4d;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: username,
      });
      navigate("/dashBoard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
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
  );
};

export default SignUp;