import Nav from "./Nav";
import Toogle from "./Toggle/Toogle";
import Logo from "./Logo";
import './Header.scss'

const Header = () =>{
    return(
        <div className="header">
            <div className="wide">
                <Logo/>
                <Nav/>
                <Toogle/>
            </div>
        </div>
    )
}

export default Header;