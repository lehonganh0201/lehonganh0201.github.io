import Logo from './Logo';
import Center from './Center.jsx';
import Download from './Download.jsx'
import './Top.scss'
const Top = () =>{
    return (
        <div className='top'>
            <Logo />
            <Center />
            <Download />
        </div>
    )
}

export default Top;