import imgF from '../../../assets/images/phone_1.png';
import imgS from '../../../assets/images/phone_2.png';
const Images = () =>{
    return (
        <div>
            <img src={imgF} style={{position:'absolute',left:'140%',top:'10%',height:'500px',width:'250px'}}></img>
            <img src={imgS} style={{position:'absolute',left:'157.5%',top:'20%',height:'500px',width:'250px'}}></img>
        </div>
    )
}

export default Images;