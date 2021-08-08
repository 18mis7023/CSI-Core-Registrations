import React,{ useState } from 'react';
import "../../assets/css/tabs.css";

function AdminDpt(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ContentDept">
            <h3 class="stage2title">Department: Admin Department</h3>
            <h4 class='rolescontent'>Roles:</h4>
            <div>
                <p>1.President</p>
                <p>2.Vice President </p>
                <p>3.Secretary </p>
                <p>4.Executive Secretary</p>
                <p>5.Treasurer</p>
                <p>6.Club managers </p>
                <p>7.Community Manager </p>
            </div>
            <div class="tabbed">
                <div className="bloc-tabs">
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>President </button>
                    <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Vice President</button>
                    <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Secretary</button>
                    <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Executive Secretary</button>
                    <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Treasurer</button>
                    <button className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}>Club managers</button>
                    <button className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)}>Community Manager</button>
                </div>

                <div className="content-tabs">
                    {/* Tab-1  President*/}
                    <div className={toggleState === 1 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Responsibilities:</h2>
                            <div>
                                <p>1. Provides overall leadership and direction to the club organization. </p>
                                <p>2. Establishes short- and long- range objectives and goals in conjunction with the Executive Committee </p>
                                <p>3. Coordinates club activities through the Executive Committee </p>
                                <p>4. Presides at meetings of the club and its Executive Committee. </p>
                                <p>5. Structures the organization to ensure continuity by providing opportunities for new leadership to develop.</p>
                                <p>6. Exercises overall financial responsibility for the club</p>
                            </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Effective communication skills. </p>
                            <p>2. Knowledge regarding all the trending technical aspects. </p>
                            <p>3. Strong leadership skills with the ability to inspire members to action through their influence. </p>
                            <p>4. Management skills to direct the chapter’s operations. </p>
                            <p>5. Innovative, with the vision of the future of the chapter that they can plan,strategize and execute.</p>
                        </div>
                    </div>
                    {/* Tab-2 Vice President(2)*/}
                    <div className={toggleState === 2 ? "tabcontent  active-content" : "tabcontent"} >
                        <h2>Responsibilities:</h2>
                            <div>
                                <p>1. Presides at meetings in the absence of the president. </p>
                                <p>2. Plans, coordinates, and recruits committees to manage a series of meetings and programs. </p>
                                <p>3. Coordinates programs with the president and the executive committee </p>
                                <p>4. Provides timely and interesting advance information for newsletters and mailings. </p>
                                <p>5. Provides or coordinates information on forthcoming events to the secretary for inclusion in meeting notices, newsletters or electronic distribution lists. </p>
                            </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Ability to interact with and influence a wide range of students. </p>
                            <p>2. Excellent communication and public speaking skills. </p>
                            <p>3. Strong multi-tasking skills. </p>
                            <p>4. Interpersonal skills to manage and guide the members. </p>
                        </div>
                    </div>
                    {/* Tab-3 Secretary*/}
                    <div className={toggleState === 3 ? "content  active-content" : "content"} >
                        <h2>Responsibilities:</h2>
                            <div>
                                <p>1. Responsible for recording exact minutes of any Meeting, ordinary or something else, of the Membership or the Executive Committee. </p>
                                <p>2. Responsible for the composition and circulation of a circular or other notification to the Membership advising them regarding any Meeting or other social occasion of the Club, and besides will consistently keep up with a precise and complete rundown of the Membership of the Club. </p>
                                <p>3. Responsible for coordination of the club alongside the Executive secretary. </p>
                            </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Ability to prioritise work and manage time effectively </p>
                            <p>2. Excellent interpersonal skills and the ability to communicate at all levels </p>
                            <p>3. Should have good working knowledge of the chapter. </p>
                            <p>4. Excellent presentation and negotiation skills. </p>
                        </div>
                    </div>
                    {/* Tab-4 Executive Secretary*/}
                    <div className={toggleState === 4 ? "content  active-content" : "content"} >
                        <h2>Responsibilities:</h2>
                            <div>
                                <p>1. Responsible for recording exact minutes of any Meeting, ordinary or something else, of the Membership or the Executive Committee. </p>
                                <p>2. Responsible for the composition and circulation of a circular or other notification to the Membership advising them regarding any Meeting or other social occasion of the Club, and besides will consistently keep up with a precise and complete rundown of the Membership of the Club. </p>
                                <p>3. Responsible for coordination of the club alongside the Executive secretary. </p>
                            </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Ability to prioritise work and manage time effectively </p>
                            <p>2. Excellent interpersonal skills and the ability to communicate at all levels </p>
                            <p>3. Should have good working knowledge of the chapter. </p>
                            <p>4. Excellent presentation and negotiation skills. </p>
                        </div>
                    </div>
                    {/* Tab-5 Treasurer*/}
                    <div className={toggleState === 5 ? "content  active-content" : "content"} >
                        <h2>Responsibilities:</h2>
                        <div>
                            <p>1. Responsible for maintaining accurate financial records of the Club and shall be allowed to request payment on behalf of the Club. </p>
                            <p>2. The Treasurer, with the President, shall prepare and present any budget requests to the appropriate funding source.</p>
                            <p>3. Responsible for ensuring that all funds are properly kept within the University accounting system.</p>
                        </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Be capable of handling figures and cash.</p>
                            <p>2. Have an orderly mind and methodical way of thinking. </p>
                            <p>3. Have experience of financial control and budgeting. </p>
                            <p>4. Good communication and interpersonal skills.</p>
                            <p>5. Ability to ensure decisions are taken and followed-up.</p>
                        </div>
                    </div>
                    {/* Tab-6 Club managers(2)*/}
                    <div className={toggleState === 6 ? "content  active-content" : "content"} >
                        <h2>Responsibilities:</h2>
                        <div>
                            <p>1. Responsible while enlisting recently added team members for the club. </p>
                            <p>2. Responsible for any correspondence between club individuals and organizations.</p>
                            <p>3. Responsible for detailing any disciplinary activity tothe Executive Committee whenever needed inside the club.</p>
                            <p>4. Responsible for giving mindfulness and intentions of the club to the newcomers whenever required. </p>
                        </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. To be friendly, helpful and patient.</p>
                            <p>2. To enjoy working with people. </p>
                            <p>3. The ability to manage members of the club. </p>
                            <p>4. Good communication and organisational skills. </p>
                            <p>5. To act in a professional manner at all times.</p>
                        </div>
                    </div>
                    {/* Tab-7 Community Manager(2) */}
                    <div className={toggleState === 7 ? "content  active-content" : "content"} >
                        <h2>Responsibilities:</h2>
                        <div>
                            <p>1. Respond to club members or Volunteers in a timely manner. </p>
                            <p>2. Monitor, track and report on feedback and online reviews.</p>
                            <p>3. Organize and manage events to boost Clubs Name.</p>
                            <p>4. Coordinate with Marketing, Creative and Communications teams. </p>
                            <p>5. Liaise with Development and Marketing departments.</p>
                            <p>6. Respond to Club Members in a timely manner. </p>
                            <p>7. Build relationships with Students, Industry professionals and Social Media Pages.</p>
                        </div>
                        <h2>Skills:</h2>
                        <div>
                            <p>1. Proven work experience as a community manager or similar role.</p>
                            <p>2. Experience planning and leading community initiatives. </p>
                            <p>3. Ability to identify and track relevant community. </p>
                            <p>4. Excellent verbal communication skills. </p>
                            <p>5. Excellent writing skills.</p>
                            <p>6. Excellent interpersonal and presentations skills. </p>
                            <p>7. Attention to detail, critical-thinker and problem-solver.</p>
                        </div>
                    </div>     
                </div>
            </div> 
               
        </div>
        
    );
}


export default AdminDpt;