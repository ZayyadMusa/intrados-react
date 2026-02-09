import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: auto;
  padding: 20px 10%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

`;
const LeftContainer = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
`;
const SearchButton = styled.button`
    padding: 20px 30px;
    background-color: #ff9e00;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;




const Header = () => {
    return (
      <Container>
       <LeftContainer>
        <h2>MyApp</h2>
        <Navbar />
       </LeftContainer>
       <RightContainer>
        <SearchButton>Search</SearchButton>
       </RightContainer>
      </Container>
    );
  };
  
  export default Header;