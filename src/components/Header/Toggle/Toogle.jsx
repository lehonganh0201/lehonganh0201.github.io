import React, { useState } from 'react';
import './Toggle.scss';

const Toogle = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div className={`toggle-container ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
            <div className="toggle-button">
                <div className="toggle-circle"></div>
            </div>
        </div>
    );
}

export default Toogle;