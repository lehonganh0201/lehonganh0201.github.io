import Search from "./Search";
import Profile from "./Profile";
import './Content.scss';


const Content = () =>{
    return (
        <div className="container card-list">
            <div className="container wide">
                <Search/>
                <Profile/>
            </div>
        </div>
    )
}

export default Content;