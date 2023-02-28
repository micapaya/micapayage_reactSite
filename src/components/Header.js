import React from 'react';
import Logo from './Logo';
import Nav from './Nav';


const Header = () => {
    return (
        <div className='headerFluid'>
            
            <Logo/>
            <Nav/>
            
        </div>
    );
};

export default Header;