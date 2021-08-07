import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function CreativeDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Creative Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead-</p>
                <p>2.Poster Making </p>
                <p>3.Video Making </p>
                <p>4.Mail template</p>
            </div>
            <div class="tabbed">
                <h2>Skills:</h2>
                <div>
                    <p>1. Knowledge of the software and applications involved in the creative process.</p>
                    <p>2. Awareness of current trends in advertising and design.</p>
                    <p>3. Excellent leadership and interpersonal skills. </p>
                    <p>4. Ability to inspire the creative team to give their best.</p>
                </div>
            </div>    
        </div>
        
    );
}


export default CreativeDpt;