import { createGlobalStyle } from 'styled-components'
import imgMobile from '../assets/images/bg-intro-mobile.png'

const GlobalStyles=createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 body{
background-color: ${props=>props.theme.colors.Red};
background-image: url(${imgMobile});
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;

 }
`
export default GlobalStyles