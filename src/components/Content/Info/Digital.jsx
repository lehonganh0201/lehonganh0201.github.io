import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import './style.css'
const Digital = () =>{
    return (
        <div>
            <FontAwesomeIcon icon={faSun}  className="icon"/>
            <h3 className="subtitle">Digital Whiteboard</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
        </div>
    )
}

export default Digital;