import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function DocumentationDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Documentation Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead</p>
                <p>2.Team Members </p>
            </div>
            <div class="tabbed">
                <h2>Skills:</h2>
                <div>
                    <p>1. Outstanding organizational skills.</p>
                    <p>2. Excellent written and verbal communication.</p>
                    <p>3. Good interpersonal skills. </p>
                </div>
            </div>    
        </div>
        
    );
}


export default DocumentationDpt;