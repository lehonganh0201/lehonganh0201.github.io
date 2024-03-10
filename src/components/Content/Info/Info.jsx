import Design from "./Design";
import Digital from "./Digital";
import Explore from "./Explore";

const Info = () =>{
    return (
        <div style={{display:'flex',justifyContent:'space-around',textAlign:'center'}}>
            <Design/>
            <Digital/>
            <Explore/>
        </div>
    )
}

export default Info;