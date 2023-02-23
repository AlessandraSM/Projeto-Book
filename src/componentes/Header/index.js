import Icones from "../Icones"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import './styled.css'

function Header(){
    return(
        <header className="App-header">
        <Logo />
         <OpcoesHeader/>
          <Icones/>
        </header>
    )
}
export default Header 