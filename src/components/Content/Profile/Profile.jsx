import Create from "./Create";
import Enjoy from "./Enjoy";
import SignUp from "./SignUp";

const Profile = () =>{
    return (
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            marginTop:'40px'
        }}>
            <SignUp/>
            <Create/>
            <Enjoy/>
        </div>
    )
}

export default Profile;