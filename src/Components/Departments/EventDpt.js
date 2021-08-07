import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function EventDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Event Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead</p>
                <p>2.Team Members </p>
            </div>
            <div class="tabbed">
                <h2>Skills:</h2>
                <div>
                    <p>1. Time-management skills and the ability to work under pressure to ensure the efficient running of an event.</p>
                    <p>2. Organisational skills and attention to detail.</p>
                    <p>3. Communication and interpersonal skills. </p>
                </div>
            </div>    
        </div>
        
    );
}


export default EventDpt;