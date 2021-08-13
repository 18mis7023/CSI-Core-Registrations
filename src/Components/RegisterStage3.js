import React, { useState, useEffect } from "react";
// import {motion} from "framer-motion";
// import firebase from '../firebaseauth.js';
import Collapsible from "react-collapsible";

import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import "../assets/css/stage3.css";
import "../assets/css/drop.scss";

class RegisterStage3 extends React.Component {
  // const [question1,setQuestion1]=useState('');
  // const [question2,setQuestion2]=useState('');
  // const [question3,setQuestion3]=useState('');
  // const [userdata,setUserdata]=useState({});

  state = {
    isOpen1: false,
  };

  toggle = (index) => {
    let collapse = "isOpen" + index;

    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 left">
              <div id="timeline-wrap">
                <div id="timeline"></div>
                <div className="marker m1">
                  <button className="btn reg1">Personal Details</button>
                </div>
                <div className="marker m2">
                  <button className="btn reg2">Professional Details</button>
                </div>
                <div className="marker m3">
                  <button className="btn reg3">Submission</button>
                </div>
              </div>
              <form className="form" action="Post.php" method="POST">
                <h3 className="title">Administrative Department</h3>
                <div className="form-group">
                  <div className="app">
                    <button
                      className={cx("app__toggle", {
                        "app__toggle--active": this.state.isOpen1,
                      })}
                      onClick={() => this.toggle(1)}
                    >
                      <span className="app__toggle-text">
                        See tips to answer this question
                      </span>
                      <div className="rotate90">
                        <svg
                          className={cx("icon", {
                            "icon--expanded": this.state.isOpen1,
                          })}
                          viewBox="6 0 12 24"
                        >
                          <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                        </svg>
                      </div>
                    </button>
                    <Collapse
                      isOpen={this.state.isOpen1}
                      className={
                        "app__collapse app__collapse--gradient " +
                        (this.state.isOpen1 ? "app__collapse--active" : "")
                      }
                    >
                      <div className="app__content">
                        <p className="tips">
                          <b>Highlight your strengths</b> - Lorem ipsum dolor
                          sit, amet consectetur adipisicing elit. Deserunt
                          officiis ut fugit blanditiis error ea excepturi, quis
                          iste, a optio voluptatibus dolor! Sint, dolores sunt!
                          Ipsum consequuntur cum molestias? Quo.
                          <br />
                          <br />
                          <b>Highlight your strengths</b> - Lorem ipsum dolor
                          sit, amet consectetur adipisicing elit. Deserunt
                          officiis ut fugit blanditiis error ea excepturi, quis
                          iste, a optio voluptatibus dolor! Sint, dolores sunt!
                          Ipsum consequuntur cum molestias? Quo.
                          <br />
                          <br />
                          <b>Highlight your strengths</b> - Lorem ipsum dolor
                          sit, amet consectetur adipisicing elit. Deserunt
                          officiis ut fugit blanditiis error ea excepturi, quis
                          iste, a optio voluptatibus dolor! Sint, dolores sunt!
                          Ipsum consequuntur cum molestias? Quo.
                          <br />
                        </p>
                      </div>
                    </Collapse>
                  </div>
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
                <br />
                <br />
                <div className="form-group">
                  <label for="exampleFormControlInput1">
                    Why should you be hired for this role?
                  </label>
                  <textarea
                    className="form-control"
                    name="aboutc"
                    id="exampleFormControlInput1"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed laudantium, esse ipsam illo dolorum itaque porro ipsum distinctio ut provident harum soluta consequatur veritatis perspiciatis id voluptate? Fugiat, iure!"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput1">
                    Paste links of any of your works/projects (if any)
                  </label>
                  <textarea
                    className="form-control"
                    name="aboutj"
                    id="exampleFormControlInput1"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed laudantium, esse ipsam illo dolorum itaque porro ipsum distinctio ut provident harum soluta consequatur veritatis perspiciatis id voluptate? Fugiat, iure!"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </form>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterStage3;
