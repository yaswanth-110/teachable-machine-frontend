import { useState } from 'react';


import menu_icon from '../../assests/Icons/menuicon-removebg-preview.png';
import './TeachableHeader.css';
const TeachableHeader = () => {
    

    return (
        <div className='header-item'>
            <img src={menu_icon} />
            <span>Teachable Machine</span>
        </div>
    );
}

export default TeachableHeader;