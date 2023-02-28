import logo from "../../img/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  margin-left: 30px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg 
        src={logo} 
        alt="logo" />
      <p>
        <strong>The</strong>Books
      </p>
    </LogoContainer>
  );
}
export default Logo;
