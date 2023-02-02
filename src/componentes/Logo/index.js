import logo from '../../img/logo.svg'
import './styled.css'

function Logo() {
    return(
        <div className="logo">
          <img src={logo} className='log' alt='Logo'></img>
          <p><strong>The</strong>Books</p>
        </div>
    )
}

export default Logo;