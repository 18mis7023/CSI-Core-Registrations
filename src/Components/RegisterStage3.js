import React, { useState } from "react";
import { motion } from "framer-motion";
import firebase from "../firebaseauth.js";
// import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import "../assets/css/stage3.css";
import "../assets/css/drop.scss";

class RegisterStage3 extends React.Component {
  state = {
    isOpen1: false,
    que1: "",
    que2: "",
    redirect: null,
  };

  toggle = (index) => {
    let collapse = "isOpen" + index;

    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const setQue1 = (e) => {
      this.setState({ que1: e.target.value });
    };
    const setQue2 = (e) => {
      this.setState({ que2: e.target.value });
    };
    const submitreg3 = (e) => {
      // if (this.state.que1 == "" || this.state.que2 == "") {
      //   alert("Please fill the all details correctly");
      // } else {
      const registerref = firebase
        .database()
        .ref(`CSI/Registration/${firebase.auth().currentUser.uid}`);
      // console.log(registerref)
      const registersubmit3 = {
        Question1: this.state.que1,
        Question2: this.state.que2,
      };

      registerref.update(registersubmit3, (error) => {
        if (error) {
          alert("Sorry Please Try again once more !!! ." + error);
        } else {
          <Redirect to="/submitted" />;
          // alert("Stage 3 Data Submitted Successfully");
          this.setState({ redirect: "/submitted" });
        }
      });
      // }
    };

    return (
      <div>
        <div className="container" style={{ marginTop: "120px" }}>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 left">
              {/* <div id="timeline-wrap">
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
               */}
              <div
                className="form"
                style={{
                  paddingLeft: "30px",
                  paddingTop: "20px",
                  paddingDown: "20px",
                  paddingRight: "20px",
                }}
              >
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
                          <b>Highlight your strengths</b> - Mention any
                          experience (internship/job experience or
                          extra-curricular activities), accomplishments, skills
                          that are relevant to the role.
                          <br />
                          <br />
                          <b>Show enthusiasm</b> - Mention what excites you
                          about this role and the company. You can go through
                          their website/ social media to understand what
                          interests you.
                          <br />
                          <br />
                          <b>Do not copy answers</b> from the internet.
                          <br />
                        </p>
                      </div>
                    </Collapse>
                  </div>
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
                    placeholder="This answer will be seen by the recruiters even before they view your academic and personal information. Answer this question carefully and add relevant information like your skills/experience and why do you find the role exciting"
                    rows="5"
                    required
                    value={this.state.que1}
                    onChange={setQue1}
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
                    placeholder="This answer will be seen by the recruiters even before they view your academic and personal information. Answer this question carefully and add relevant information like your skills/experience and why do you find the role exciting"
                    rows="5"
                    required
                    value={this.state.que2}
                    onChange={setQue2}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  onClick={submitreg3}
                  className="btn sub"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  Submit
                </motion.button>
              </div>
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
