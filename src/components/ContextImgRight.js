import React from 'react';


const ContextImgRight = (props) => {
    return (
        
        <div className="containerRight">
                        <div></div>
                        <img className='avatar'
                            src={props.ImageSrc} 
                            alt={props.alt}
                            
                        />
        </div>


    );
};

export default ContextImgRight;