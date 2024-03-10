import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Download = () =>{
    return (
        <div style={{backgroundColor:'#00a6eb', textTransform:'uppercase',color:'white',fontSize:'14px',padding:'10px 20px', cursor:'pointer'}}>
        <FontAwesomeIcon icon={faDownload} style={{color: "#ffffff",}} />
        Free Download
        </div>
    )
}

export default Download;