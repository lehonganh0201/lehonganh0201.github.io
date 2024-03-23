import React from 'react';
import profileData from '../../data/profiledata.json';
import './Profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        <div className='container' style={{flexWrap:'wrap'}}>
            {profileData.map((profile, index) => (
                <div className='profile'>
                <div className='profile-infor' key={index}>
                    <div className='profile-avatar'>
                        <img src={profile.avatar} alt='Avatar' />
                    </div>

                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>

                    <div className='socials'>
                        <a href={profile.facebook} style={{color:'#6c6bf5'}}><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href={profile.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={profile.discord} style={{color:'#5562ea'}}><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href={profile.instagram} style={{color:'#ee0bae'}}><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Profile;
