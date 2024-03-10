import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () =>{
    return (
        <div className='footer-item'>
            <h3 style={{fontSize:'18px',marginBottom:'30px'}}>About SoftLand</h3>
            <p style={{color:'#9fa1a4',lineHeight:'1.5',marginBottom:'1rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.
            </p>

            <div>
                <FontAwesomeIcon icon={faTwitter} className='footer-icon'/>
                <FontAwesomeIcon icon={faFacebookF} className='footer-icon'/>
                <FontAwesomeIcon icon={faInstagram} className='footer-icon'/>
                <FontAwesomeIcon icon={faLinkedin} className='footer-icon'/>
            </div>
        </div>
    )
}

export default About;