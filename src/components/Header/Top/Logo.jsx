import LogoImage from '../../../assets/images/logo.png';

const Logo = () =>{
    return (
        <div>
            <img src={LogoImage} alt='Logo Image' height={30} width={200} style={{paddingLeft:'12px',cursor:'pointer'}}></img>
        </div>
    )
}

export default Logo;