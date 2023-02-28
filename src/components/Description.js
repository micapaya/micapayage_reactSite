import React from 'react';
import { Motion, spring } from "react-motion";

const Description = (props) => {

    return (
        
        <div className="containerLeft">
            <Motion
            defaultStyle={{
                blur: 5,
                translateX: -100,
                translateY: -0
            }}
            style={{
                blur: spring(0),
                translateX: spring(0,{stiffness : 100}),
                translateY: spring(0,{stiffness : 100})
            }}
            >
            {interpolatedStyles =>(
                <div className='left'style={{
                            transform: `translateX(${interpolatedStyles.translateX}px) translateY(${interpolatedStyles.translateY}px)`,
                    filter: `blur(${interpolatedStyles.blur}px)`
                }}
                >
                    <h1 style={{
                    transform: `translateY(${interpolatedStyles.translateY}px) translateX(5px)`
                    }}className="title">{props.title}</h1>
                    <p className="desc">{props.desc}</p>
                    
                    
                </div>
            )}

            </Motion>
            
        </div>
    );
};

export default Description;