import React, { useState, useEffect } from "react";
import "../assets/css/registerstage2.css";
import TechnicalDpt from "./Departments/TechnicalDpt";
import { useHistory } from "react-router-dom";
import AdminDpt from "./Departments/AdminDpt";
import CreativeDpt from "./Departments/CreativeDpt";
import MarketingDpt from "./Departments/MarketingDpt";
import EventDpt from "./Departments/EventDpt";
import DocumentationDpt from "./Departments/DocumentationDpt";
import OutreachDpt from "./Departments/OutreachDpt";
import { motion } from "framer-motion";
import firebase from "../firebaseauth.js";

function RegisterStage2() {
  const [department, setDepartment] = useState("");
  const history = useHistory();
  const { state } = history.location;
  const [skills, setSkills] = useState("");
  const [reference1, setReference1] = useState("");
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    if (state != null) {
      setDepartment(state.data.Department);
    }
  }, []);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserdata(user);
    } else {
      history.push("/");
    }
  });

  const setskill = (e) => {
    setSkills(e.target.value);
  };
  const setreference1 = (e) => {
    setReference1(e.target.value);
  };

  const submitregistration2 = (e) => {
    // setIsActive(true)
    e.preventDefault();

    // console.log(registerref)
    const registersubmit2 = {
      Skills: skills,
      Reference1: reference1,
      DepartmentTemp: department,
    };
    const registerref = firebase
      .database()
      .ref(`CSI/Registration/${firebase.auth().currentUser.uid}`);
    if (skills != "") {
      console.log(registersubmit2);
      registerref.update(registersubmit2, (error) => {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          // alert("Stage 2 Data is Submitted Successfully");
          setSkills("");
          setReference1("");

          history.push("/registerstage3", {
            id: 2,
            data: {
              Department: department,
            },
          });
        }
      });
    } else {
    }
  };

  // setDepartment(state.data.department)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 left">
          <div id="timeline-wrap">
            <div id="timeline2"></div>
            <div className="marker m1">
              <button className="btn btnactive">Personal Details</button>
            </div>
            <div className="marker m2">
              <button className="btn btnactive">Professional Details</button>
            </div>
            <div className="marker m3">
              <button className="btn btnnotactive">Submission</button>
            </div>
          </div>
          <div className="stage2content">
            {department === "Technical Department" ? (
              <TechnicalDpt />
            ) : department === "Creative Department" ? (
              <CreativeDpt />
            ) : department === "Admin Department" ? (
              <AdminDpt />
            ) : department === "Marketing Department" ? (
              <MarketingDpt />
            ) : department === "Event Management Department" ? (
              <EventDpt />
            ) : department === "Outreach Department" ? (
              <OutreachDpt />
            ) : department === "Documentation Department" ? (
              <DocumentationDpt />
            ) : (
              <h2>
                Page has Expired !!! <br />
                Please Go to Home Page and Register the form{" "}
              </h2>
            )}
            {/*                 
                <AdminDpt />
                                  <CreativeDpt />
                                  <DocumentationDpt />
                                  <EventDpt />
                                  <MarketingDpt />
                                  <OutreachDpt />
                                  <TechnicalDpt /> */}

            {department === "Technical Department" ||
            department === "Creative Department" ||
            department === "Admin Department" ||
            department === "Event Management Department" ||
            department === "Outreach Department" ||
            department === "Documentation Department" ||
            department === "Marketing Department" ? (
              <div>
                <form className="force-overflow" onSubmit={submitregistration2}>
                  <div className="form-group">
                    <label>Skills You have *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="skills"
                      id="stage2skills"
                      placeholder="java,html,django,communication skills,marketing..."
                      value={skills}
                      onChange={setskill}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Reference Link 1 (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ref1"
                      id="ref1"
                      placeholder="Github Link or Github Username"
                      value={reference1}
                      onChange={setreference1}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn sub"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    NEXT
                  </motion.button>
                </form>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterStage2;
