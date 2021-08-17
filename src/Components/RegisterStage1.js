import React, { useState } from "react";
import "../assets/css/registrationstage1.css";
import stage1logo from "../assets/images/temp2.png";
import { motion } from "framer-motion";
import firebase from "../firebaseauth.js";
import validator from "validator";
import { useHistory } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  x: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

function RegisterStage1(props) {
  const isLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setUserdata(user);
        return true;
      } else {
        return false;
      }
    });
  };
  const [userdata, setUserdata] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [address, setAddress] = useState("");
  const [registrationnum, setRegistrationnum] = useState("");
  const [dob, setDob] = useState("");
  const [branch, setBranch] = useState("");
  const [department, setDepartment] = useState("");
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [gender, setGender] = useState("");
  const [disable, setDisable] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState("");
  let history = useHistory();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserdata(user);
    } else {
      history.push("/");
    }
  });
  // console.log(imageAsFile)
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const setname = (e) => {
    setName(e.target.value);
  };
  const setphonenum = (e) => {
    setPhonenum(e.target.value);
  };
  const setaddress = (e) => {
    setAddress(e.target.value);
  };
  const setregistrationnum = (e) => {
    setRegistrationnum(e.target.value);
  };
  const setbranch = (e) => {
    setBranch(e.target.value);
  };
  const setdob = (e) => {
    setDob(e.target.value);
  };
  const setdepartment = (e) => {
    setDepartment(e.target.value);
  };
  const setgender = (e) => {
    setGender(e.target.value);
  };
  const setdisable = (e) => {
    if (email != null && email != "") {
      setEmail(email);
      setDisable(true);
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setEmail(user.email);
          setDisable(true);
        } else {
          history("/");
        }
      });
    }
  };
  const submitregistration = (e) => {
    setLoading("Loading ...... please wait ......");

    setIsActive(true);
    e.preventDefault();

    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    setLoading("Data is submiting ...... please wait ......");
    const registerref = firebase
      .database()
      .ref(`CSI/Registration/${firebase.auth().currentUser.uid}`);

    // console.log(registerref)
    const registersubmit = {
      Name: name,
      Email: email,
      Number: phonenum,
      RegistrationNumber: registrationnum,
      Address: address,
      id: firebase.auth().currentUser.uid,
      DOB: dob,
      Branch: branch,
      Department: department,
      Gender: gender,
    };
    if (
      name != "" &&
      email != "" &&
      phonenum != "" &&
      registrationnum != "" &&
      phonenum.length == 10 &&
      registrationnum.length >= 9 &&
      validator.isEmail(email) &&
      branch != "" &&
      dob != "" &&
      department != "" &&
      gender != ""
    ) {
      console.log(registersubmit);
      registerref.set(registersubmit, (error) => {
        if (error) {
          alert("Sorry Please Try again once more !!! ." + error);
        } else {
          setLoading("DATA SUBMITTED");
          history.push("/registerstage2", {
            id: 1,
            data: {
              Department: department,
            },
          });
        }
      });
    }
  };
  const TextCenter = {
    textAlign: "center",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 left">
          <h3 className="title" style={TextCenter}>
            CSI CORE TEAM REGISTRATION
          </h3>
          <form className="force-overflow" onSubmit={submitregistration}>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="fullname"
                placeholder="John Dev"
                value={name}
                onChange={setname}
                required
              />
            </div>
            <div className="form-group">
              <label>Registration Number *</label>
              <input
                type="text"
                className="form-control"
                name="id"
                id="regno"
                placeholder="18BEC7000"
                value={registrationnum}
                onChange={setregistrationnum}
                required
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="johndev.18BEC7000@vitap.ac.in"
                required
                onChange={setdisable}
                value={email}
                disabled={disable}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number *</label>
              <input
                type="number"
                className="form-control"
                name="nopos"
                id="phnum"
                placeholder="9494616023"
                required
                onChange={setphonenum}
                value={phonenum}
              />
            </div>
            <div className="form-group">
              <label>Date Of Birth *</label>
              <input
                type="date"
                className="form-control"
                name="deadline"
                id="dob"
                placeholder="July 27 2021"
                required
                onChange={setdob}
                value={dob}
              />
            </div>
            <div className="form-group">
              <label>Gender *</label>
              <select
                className="form-control"
                name="gender"
                id="gender"
                onChange={setgender}
              >
                <option value="">---SELECT----</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Branch *</label>
              <input
                type="text"
                className="form-control"
                name="branch"
                id="branch"
                placeholder="Software Engineering"
                value={branch}
                onChange={setbranch}
                required
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                className="form-control"
                name="department"
                id="department"
                onChange={setdepartment}
              >
                <option value="">---SELECT----</option>
                <option value="Technical Department">
                  Technical Department
                </option>
                <option value="Creative Department">Creative Department</option>
                <option value="Marketing Department">
                  Marketing Department
                </option>
                <option value="Event Management Department">
                  Event Management Department
                </option>
                <option value="Admin Department">Admin Department</option>
                <option value="Outreach Department">Outreach Department</option>
                <option value="Documentation Department">
                  Documentation Department
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                className="form-control"
                name="aboutc"
                id="exampleFormControlInput1"
                placeholder="Address"
                rows="5"
                required
                onChange={setaddress}
                value={address}
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
            <spam className="loading">{loading}</spam>
          </form>
          <LoadingOverlay
            active={isActive}
            spinner
            text="uploading Image"
          ></LoadingOverlay>
        </div>
        <div className="col-sm-4 col-sm-offset-1">
          <motion.img
            className="illustration"
            src={stage1logo}
            alt="Core team Registrations"
            animate={{
              y: ["100px", "120px"],
              x: ["0px", "-20px"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              bounceTransition,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default RegisterStage1;
