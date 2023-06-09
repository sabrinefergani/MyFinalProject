import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../src/components/home/Home";
import Recipes from "../src/components/bar/Recipes";
import AboutUs from "../src/components/bar/AboutUs";
import Composting from "../src/components/bar/Composting";
import ContactUs from "../src/components/bar/ContactUs";

import SingleRecipe from "./components/recipes/SingleRecipe";
import SignIn from "./components/bar/SignIn";
import SignUp from "./components/bar/SignUp";
import DashBoard from "./components/user/DashBoard";
import OneRecipe from "./components/user/OneRecipe";
import FavoriteRecipe from "./components/user/FavoriteRecipe";

import { createGlobalStyle } from "styled-components";
import GetRecipe from "./components/user/GetRecipe";

import { UserProvider } from "./components/bar/UserContext";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <RowWrapper>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/composting" element={<Composting />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/recipes/:id" element={<SingleRecipe />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/dashBoard" element={<DashBoard />} />
              <Route path="/contentRecipe" element={<GetRecipe />} />
              <Route path="/getRecipe/:id" element={<OneRecipe />} />
              <Route path="/favorite" element={<FavoriteRecipe />} />
            </Routes>
          </Main>
        </RowWrapper>
      </UserProvider>
    </BrowserRouter>
  );
};

const Main = styled.div`
  flex: 1;
  padding-right: 20px;
  background-color: white;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 70px;
`;

export default App;
