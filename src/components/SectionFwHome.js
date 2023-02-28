import React from 'react';
import ContextImgRight from './ContextImgRight';
import Description from './Description';
import Skills from './Skills';
import Socials from './Socials';
import { Motion , spring} from 'react-motion';


const valueOfSkills = [["photoshop", 90],
                        ["illustrator", 95],
                        ["indesign", 60],
                        ["after effect", 70],
                        ["photographie", 75],
                        ["HTML", 99],
                        ["CSS", 90],
                        ["JAVASCRIPT", 80],
                        ["REACT", 50],
                        ["NODE JS", 50],
                        ["JAVA", 40]
                      ]


const SectionFwHome = (props) => {
    return (
        <section className='section'>
            <Description desc={props.desc} title={props.title}/>
            <Motion
            defaultStyle={{
                translateY : -200,
                translateTopY : 300
            }}
            style={{
                translateY : spring(0,{stiffness : 100}),
                translateTopY : spring(0,{stiffness : 100})
            }}
            >
            {interpolatedStyles => (
                    <ul 
                    className="skillsList"
                    style={{
                        transform : `translateY(${interpolatedStyles.translateY}px)`
                    }}
                    >
                        {valueOfSkills.map((skills, idx) => (
                            <Skills 
                            skillsName={skills[0]} 
                            valueSkill={skills[1]} 
                            key={idx}
                            style={{
                                transform: `translateY(${interpolatedStyles.translateTopY}px)`
                            }} 
                            />
                        ))}
                    </ul>
            )}

             
            </Motion>


            <ContextImgRight ImageSrc="assets/img/photoCVBW.png" alt="une photo de payage michael"/>
            <Socials/>

        </section>
        
    );
};

export default SectionFwHome;