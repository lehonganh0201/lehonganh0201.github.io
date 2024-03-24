import Left from './Left/Left';
import Right from './Right/Right';
import './Banner.scss'
const Banner = () =>{
    return (
        <div className='banner'>
            <Left />
            <Right />
        </div>
    )
}

export default Banner;