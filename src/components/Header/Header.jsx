import Top from "./Top/Top";
import Bottom from './Bottom/Bottom';
import './Header.css'

const Header = () =>{
    return (
        <div className="header">
            <Top />
            <Bottom />
        </div>
    )
}

export default Header;