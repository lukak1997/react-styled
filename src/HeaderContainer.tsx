import styled from "styled-components"


const HeaderContainer=()=>{
    return(
      
        <HeaderContainers>
        <Header>Learn to code by watching others</Header>
        <ParagraphWithMargin>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </ParagraphWithMargin>
      </HeaderContainers>
    
    )
}
const HeaderContainers=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width:1024px){
    margin-top: 290px;
    margin-bottom: 290px;
  }
`


const Header = styled.h1`
  color: ${(props) => props.theme.colors.White};
  font-family: Poppins;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2916666865348816px;
  text-align: center;
  height: 80px;
 width: 100%;
 @media screen and (min-width:1024px){
width: 525px;
height: 131px;
font-family: Poppins;
font-size: 50px;
font-weight: 700;
line-height: 55px;
letter-spacing: -0.5208333134651184px;
text-align: left;


 }
`;
const Paragraph=styled.p`
 font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0px;
text-align: center;
color: ${(props) => props.theme.colors.White};
height: 130px;
width: 100%;
@media screen and (min-width:1024px){
  font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0px;
text-align: left;
width: 525px;
height: 78px;

}
`
const ParagraphWithMargin=styled(Paragraph)`
  margin-top: 16px;
`

export default HeaderContainer