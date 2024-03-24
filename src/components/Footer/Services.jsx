import './Footer.scss';

const Services = () =>{
    return (
        <div className='footer-item'>
            <h3>
                Services
            </h3>

            <ul>
                <li><a className='footer-link'>Team</a></li>
                <li><a className='footer-link'>Collaboration</a></li>
                <li><a className='footer-link'>Todos</a></li>
                <li><a className='footer-link'>Events</a></li>
            </ul>
        </div>
    )
}

export default Services;