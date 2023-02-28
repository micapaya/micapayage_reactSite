import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';

const ActusBloc = (props) => {
    return (
        <div>
            <AnimationOnScroll animateIn='__animateEnterScroll' animateOut='__animateEnterScrollBack'>
            <div className="containerActus">
                <h2>
                    CHANTIER DU MOMENT
                </h2>
                

                <p className="actusText">
                    {props.actuContent}
                </p>
               
                <img src={props.srcImageActus} alt={props.imageActus} className="imgActus" />
                <div>
                    <h3 className="title">
                        {props.titleActus}
                    </h3>
                </div>
                <a href={props.urlOfactus}>Découvrir</a>
                
            </div>  
            </AnimationOnScroll>          
        </div>
    );
};

export default ActusBloc;