import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Leftbar from '../components/leftBar/Leftbar';    
import ProfileSettings from '../components/profileSettings/ProfileSettings';

const Profile = () => {
    return (
        <>
            <div className='mode-play'>
                <Navbar />

                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor  left-body-anchor-active'/>
                    <div className='interface'>
                    
                        <ProfileSettings/>
                    </div>
                    
                </div>
                
            </div>

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-y: hidden;
            }
            
            @media (max-width: 768px) { 
            
            .mode-play {
                overflow-x: hidden;
                overflow-y: scroll;
            }
        }
        @media (max-width: 375px) {
            .interface {
                width: 375px;
            }
        }
        `}
        </style>
        </>
      
    );
}

export default Profile;
