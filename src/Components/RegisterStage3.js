import React ,{ useState,useEffect}from 'react';
// import {motion} from "framer-motion";
// import firebase from '../firebaseauth.js';
import Collapsible from 'react-collapsible';
import "../assets/css/stage3.css";

function RegisterStage3() {
    
    // const [question1,setQuestion1]=useState('');
    // const [question2,setQuestion2]=useState('');
    // const [question3,setQuestion3]=useState('');
    // const [userdata,setUserdata]=useState({});

    return(
        <div>
            <div className="container">
            <div className='row'>
                <div className="col-sm-10 col-sm-offset-1 left">
                    <div id="timeline-wrap" >
                        <div id="timeline" ></div>
                        <div className="marker m1">
                            <button className='btn reg1'>Personal Details</button>
                        </div>
                        <div className="marker m2">
                            <button className='btn reg2'>Professional Details</button>
                        </div>
                        <div className="marker m3">
                            <button className='btn reg3'>Submission</button>
                        </div>
                    </div>
                    <form className="form" action="Post.php" method="POST">
                        <h3 className="title">Administrative Department</h3>
                        <div className="form-group">
                        <Collapsible trigger="Start here" className='tips'>
                            <p className='tips'>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p className='tips'>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                            {/* <div className='block'>
                                <p className='tips'><span>See tips to answer this question</span><span>V</span><br /></p>
                                <p className='tips'>
                                    <b>Highlight your strengths</b> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officiis ut fugit blanditiis error ea excepturi, quis iste, a optio voluptatibus dolor! Sint, dolores sunt! Ipsum consequuntur cum molestias? Quo.<br /><br />
                                    <b>Highlight your strengths</b> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officiis ut fugit blanditiis error ea excepturi, quis iste, a optio voluptatibus dolor! Sint, dolores sunt! Ipsum consequuntur cum molestias? Quo.<br /><br />
                                    <b>Highlight your strengths</b> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officiis ut fugit blanditiis error ea excepturi, quis iste, a optio voluptatibus dolor! Sint, dolores sunt! Ipsum consequuntur cum molestias? Quo.<br />
                                </p>
                            </div>
                         */}
                        </div>
                        <br /><br />
                        <div className="form-group">
                        <label for="exampleFormControlInput1">Why should you be hired for this role?</label>
                        <textarea className="form-control" name="aboutc" id="exampleFormControlInput1" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed laudantium, esse ipsam illo dolorum itaque porro ipsum distinctio ut provident harum soluta consequatur veritatis perspiciatis id voluptate? Fugiat, iure!" rows="5" required></textarea>
                        </div>
                        <div className="form-group">
                        <label for="exampleFormControlInput1">Paste links of any of your works/projects (if any)</label>
                        <textarea className="form-control" name="aboutj" id="exampleFormControlInput1" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed laudantium, esse ipsam illo dolorum itaque porro ipsum distinctio ut provident harum soluta consequatur veritatis perspiciatis id voluptate? Fugiat, iure!" rows="5" required></textarea>
                        </div>
                    </form>
                    <br /><br />
                </div>
            </div>
            </div>
        </div>
    );
}

export default RegisterStage3;
