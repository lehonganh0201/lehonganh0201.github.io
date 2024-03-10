import Name from './Name.jsx';
import Nav from './Nav.jsx';

const Bottom = () =>{
    return (
        <div style={{display:'flex',justifyContent:'space-around',height:'80px',alignItems:'center'}}>
            <Name />
            <Nav />
        </div>
    )
}

export default Bottom;