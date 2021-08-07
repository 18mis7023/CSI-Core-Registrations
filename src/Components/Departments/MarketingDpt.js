import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function MarketingDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Marketing Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead</p>
                <p>2.Associate Lead </p>
                <p>3.Team Members </p>
                
            </div>
            <div class="tabbed">
                <h2>Skills:</h2>
                <div>
                    <p>1. Good teamwork skills.</p>
                    <p>2. Communication skills and networking ability. </p>
                    <p>3. Adaptability. </p>
                    <p>4. Good organisation and planning skills.</p>
                    <p>5. Commercial awareness.</p>
                </div>
            </div>    
        </div>
        
    );
}


export default MarketingDpt;