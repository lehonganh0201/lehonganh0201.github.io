import About from './About';
import DesignedBy from './DegisnedBy';
import Download from './Downloads';
import Nav from './Navigation';
import Service from './Services';

const Footer = () =>{
    return (
        <div style={{margin:'auto 108px',padding:'5rem 0 2.5rem 0'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <About/>
            <Nav/>
            <Service/>
            <Download/>
            </div>
            <div style={{textAlign:'center'}}>
                <DesignedBy/>
            </div>
        </div>
    )
}

export default Footer;