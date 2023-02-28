import React from 'react';

const Socials = () => {
    return (
        <div className='socialContainer'>
            <a href="https://dribbble.com/micaP" className="socialLinks" target="blank">
                <img src="assets/img/dribbble.svg" alt="logo dribbble" className="iconsSocials" />
            </a>
            <a href="https://github.com/micapaya" className="socialLinks" target="blank">
                <img src="assets/img/github.svg" alt="logo github" className="iconsSocials" />
            </a>
            <a href="https://www.instagram.com/micapayage/" className="socialLinks" target="blank">
                <img src="assets/img/instagram.svg" alt="logo instagram" className="iconsSocials" />
            </a>
            <a href="https://fr.linkedin.com/in/mica-payage?original_referer=https%3A%2F%2Fwww.google.com%2F" className="socialLinks" target="blank">
                <img src="assets/img/linkedin.svg" alt="logo linkedin" className="iconsSocials" />
            </a>
            
        </div>
    );
};

export default Socials;
