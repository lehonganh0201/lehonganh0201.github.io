import React from 'react';
import logoImage from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div style={{ height: 'auto', width: '140px' }}>
            <img src={logoImage} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default Logo;
