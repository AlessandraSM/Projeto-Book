import styled from "styled-components"
import Icones from "../Icones"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"


const HeaderContainer = styled.header`
    background-color: whitesmoke;
    background-image: linear-gradient(90deg,  #f76c21 35%, #eb9b00);
    display: flex;
    justify-content: center;
`
function Header(){
    return(
        <HeaderContainer>
        <Logo />
         <OpcoesHeader/>
          <Icones/>
        </HeaderContainer>
    )
}
export default Header 