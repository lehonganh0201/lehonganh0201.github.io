import './Nav.scss'

const Nav = () =>{
    return (
        <div>
            <ul style={{listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <li><a className='active'>Home</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Blog</a></li>
                <li className='dropdown' style={{position:'relative'}}><a>Drop Down</a>
                    <ul style={{position:'absolute'}} className='drop'>
                        <li><a>Drop Down 1</a></li>
                        <li className='dropdown2' style={{position:'relative'}}><a>Deep Drop Down</a>
                            <ul style={{position:'absolute',left:'100%',top:'0'}} className='menu'>
                                <li><a>Deep Drop Down 1</a></li>
                                <li><a>Deep Drop Down 2</a></li>
                                <li><a>Deep Drop Down 3</a></li>
                                <li><a>Deep Drop Down 4</a></li>
                                <li><a>Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a>Drop Down 2</a></li>
                        <li><a>Drop Down 3</a></li>
                        <li><a>Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a>Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Nav;