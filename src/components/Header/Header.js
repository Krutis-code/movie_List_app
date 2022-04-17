import React from 'react';
import { Link } from 'react-router-dom';
import userimg from '../../images/user.png';
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link> 
            <div >
                <img src={userimg} className='user-image' alt=""></img>
            </div>
        </div>
    );
};

export default Header;
