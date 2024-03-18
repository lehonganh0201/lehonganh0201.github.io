import React, { useState } from 'react';
import './Toggle.css'; 

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div className={`toggle-container ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
            <div className="toggle-button">
                <div className="toggle-circle"></div>
            </div>
            <span className={`toggle-label ${isOn ? 'on' : 'off'}`}>{isOn ? 'On' : 'Off'}</span>
        </div>
    );
};

export default Toggle;
