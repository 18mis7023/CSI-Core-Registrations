import React,{ useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import "../../assets/css/tabs.css";


function TechnicalDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Technical Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.Lead</p>
                <p>2.UI Designers </p>
                <p>3.Web Developers </p>
                <p>4.Android app development</p>
                <p>5.Machine Learning</p>
            </div>
            <div class="tabbed">
                <div className="bloc-tabs">
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Lead </button>
                    <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>UI Designers</button>
                    <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Web Developers</button>
                    <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Android app Development</button>
                    <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Machine Learning</button>
                </div>

                <div className="content-tabs">
                    {/* Tab-1  Lead-1*/}
                    <div className={toggleState === 1 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Effective communication skills. </p>
                            <p>2. Knowledge regarding all the trending technical aspects. </p>
                            <p>3. Strong leadership skills with the ability to inspire members to action through their influence. </p>
                            <p>4. Management skills to direct the chapter’s operations. </p>
                            <p>5. Innovative, with the vision of the future of the chapter that they can plan,strategize and execute.</p>
                        </div>
                    </div>
                    {/* Tab-2 UI designers(3)*/}
                    <div className={toggleState === 2 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Interaction design principles.</p>
                            <p>2. Branding, typography and color theory. </p>
                            <p>3. Wireframing and prototyping. </p>
                            <p>4. Style guides.</p>
                            <p>5. User research and personas.</p>
                            <p>6. Teamwork and communication skills. </p>
                            <p>7. Key industry tools, including Sketch,Figma,Adobe Xd.</p>
                        </div>
                    </div>
                    {/* Tab-3 Web Developers(7)*/}
                    <div className={toggleState === 3 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Html, CSS,php, react js , JavaScript.</p>
                            <p>2. web development using Django with python. </p>
                            <p>3. User research and personas. </p>
                            <p>4. Teamwork and communication skills.</p>
                        </div>
                    </div>
                    {/* Tab-4 Android app development(8*/}
                    <div className={toggleState === 4 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Flutter using dart or Android studio using java or Android studio using kotlin.</p>
                            <p>2. User research and personas. </p>
                            <p>3. Teamwork and communication skills. </p>
                        </div>
                    </div>
                    {/* Tab-5  Machine learning(3)*/}
                    <div className={toggleState === 5 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Applied Mathematics.</p>
                            <p>2. Computer Science Fundamentals and Programming. </p>
                            <p>3. Machine Learning Algorithms. </p>
                            <p>4. Data Modeling and Evaluation.</p>
                            <p>5. Neural Networks.</p>
                            <p>6. Natural Language Processing. </p>
                            <p>7. User research and personas.</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    );
}

export default TechnicalDpt;