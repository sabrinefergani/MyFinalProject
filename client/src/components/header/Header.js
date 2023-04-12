import React from 'react';
import styled from 'styled-components';

// Setting the header images font 
const Header = () => {
  const headerStyle = {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'top ',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    width: '1200px',
    marginLeft:'100px',
    height:'700px',
    
  };

  return (
    <StyledHeader style={headerStyle}>
      <div className="container">
      
        <h1 className="animated-text">Welcome to Our Website!</h1>
        <p className="text1">Don't let your food go to waste! <br />With a little planning and creativity,<br /> you can turn leftovers and <br />scraps into delicious meals. <br />Help reduce food waste and save <br />money by using what you have,<br /> and composting what you don't</p>
      </div>
    </StyledHeader>
  );
};

//Style 

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    position: absolute;
    top: 300px;
    margin-left: 700px;
   
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .animated-text {
    animation: float 3s ease-in-out infinite;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4d4d4d;
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
   
    position: absolute;
    top: 175px;
    margin-left: 655px;
  }
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Header;
