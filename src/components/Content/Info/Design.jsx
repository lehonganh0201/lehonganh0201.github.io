import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import './style.scss'
const Design = () =>{
    return (
        <div>
            <FontAwesomeIcon icon={faUsers} className="icon"/>
            <h3 className="subtitle">Explore Your Team</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
        </div>
    )
}

export default Design;