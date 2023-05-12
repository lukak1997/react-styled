import styled from "styled-components"

const PurpleContainer=()=>{
    return(
        <PurpleContainers>
        <Result>Try it free 7 days <Little> then $20/mo. thereafter </Little></Result>
      </PurpleContainers>
    )
}

const PurpleContainers=styled.div`
  width: calc(100%-66px);
  height: 88px;
  border-radius: 10px;
  background-color: ${props=>props.theme.colors.Blue};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 66px 18px 67px;
  margin-top: 64px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  @media screen and (min-width:1024px){
    margin-top: 121px;
  }
`
const Result =styled.h2`
  color: ${props=>props.theme.colors.White};
  font-family: Poppins;
font-size: 15px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0.2678571045398712px;
text-align: center;
height: 52px;
width: 194px;
`
const Little=styled.span`
font-family: Poppins;
font-size: 15px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0.2678571045398712px;
text-align: center;

`
export default PurpleContainer