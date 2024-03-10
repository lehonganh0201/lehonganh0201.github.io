import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import './style.css'

const Explore = () =>{
    return (
        <div>
            <FontAwesomeIcon icon={faChartSimple} className="icon"/>
            <h3 className="subtitle">Design To Development</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
        </div>
    )
}

export default Explore;