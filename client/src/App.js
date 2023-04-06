import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../src/components/home/Home";
import Header from "../src/components/header/Header";
import Recipes from "../src/components/bar/Recipes";
import AboutUs from "../src/components/bar/AboutUs";
import Composting from "../src/components/bar/Composting";
import ContactUs from "../src/components/bar/ContactUs";
import Bar from "./components/bar/bar";
import SingleRecipe from "./components/recipes/SingleRecipe";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
    

      <RowWrapper>
        <Main> 
            <Bar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/composting" element={<Composting />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/recipes/:id" element={<SingleRecipe />} />

          </Routes>
        </Main>
      </RowWrapper>
    </BrowserRouter>
  );
}

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
