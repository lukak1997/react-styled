import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { defaultTheme } from "./themes/defaultTheme";
import { Helmet } from "react-helmet";
import HeaderContainer from "./HeaderContainer";
import PurpleContainer from "./assets/PurpleContainer";
import WhiteCard from "./WhiteCard";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MainContainer>
     <HeaderContainer/>
     <div>
     <PurpleContainer/>
     <WhiteCard/>
     </div>
      </MainContainer>
  
    </ThemeProvider>
  );
}
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 88px 24px;
  
  @media screen and (min-width:1270px){
   display: flex;
   gap: 45px;
 
  }
`;


export default App;
