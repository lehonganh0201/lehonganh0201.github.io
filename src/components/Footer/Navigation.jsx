import './Footer.scss';

const Nav = () =>{
    return (
        <div className='footer-item'>
            <h3>
            Navigation
            </h3>

            <ul>
                <li><a className='footer-link'>Pricing</a></li>
                <li><a className='footer-link'>Features</a></li>
                <li><a className='footer-link'>Blog</a></li>
                <li><a className='footer-link'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;