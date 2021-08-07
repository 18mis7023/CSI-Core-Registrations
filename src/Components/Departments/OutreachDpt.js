import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function OutreachDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Outreach Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead</p>
                <p>2.Team Members </p>
            </div>
            <div class="tabbed">
                <h2>Responsibilities:</h2>
                    <div>
                        <p>1. You need to catch the audience interest. </p>
                        <p>2. You need to make good realtion with our members as well as other college.</p>
                        <p>3. You need to know few techniques and tips through which you can catch the audience.</p>
                        <p>4. The person should be able to contact other college students or clubs to take in our event or workshop. </p>
                        <p>5. The person should be able to convince the sponsors according to our budget.</p>
                    </div>
                    <h2>Skills:</h2>
                    <div>
                        <p>1. To be friendly, helpful and patient.</p>
                        <p>2. Excellent written and verbal communication. </p>
                        <p>3. Time-management skills and the ability to work under pressure to ensure the efficient running of an Any Task. </p>
                        <p>4. Organisational skills and attention to detail. </p>
                        <p>5. Excellent interpersonal skills and the ability to communicate at all levels.</p>
                        <p>6. Should have good working knowledge of the chapter. </p>
                        <p>7. Excellent presentation and negotiation skills.</p>
                    </div>
            </div>    
        </div>
        
    );
}


export default OutreachDpt;