import React from 'react';
const Skills = (props) => {
    return (
        
        <div>
            
                <li><span>{props.skillsName}</span>
                    <input 
                    readOnly
                    type="range" 
                    // max={props.valueSkill} 
                    value={props.valueSkill} 
                    className="skills" />
                    <a href="http://">
                        voir
                    </a>
                </li>
            
        </div>
        
    );
};

export default Skills;