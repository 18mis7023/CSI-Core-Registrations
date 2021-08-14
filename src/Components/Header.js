import React  from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css";
import firebase from "../firebaseauth.js";
import { Redirect } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      text:"Register"
     
    };
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        this.setState({
          user: null,
          text:"Register"
        });
        this.setText({text:"Register",})
        console.log("Logged-out successfully");
      })
      .catch(function (error) {
        console.log("error while logging out");
      });
  }
  

  componentDidMount() {
    firebase.auth().onAuthStateChanged((userauth) => {
      if (userauth) {
        this.setState({ user:userauth,text:"LOGOUT" });
      }else{
        this.setState({ user:null,text:"Register" });
      }
    });
    // ()=>{
    //   this.state.user ?(this.setState({text:"Logout"})):(this.setState({text:"Register"}))
    // };
  }

  render() {
    let authButton = this.state.user ? (
      <button onClick={this.logout} className="logoutbtn headerbtn">
        <h5 className="tag">{this.state.text}</h5>
      </button>
    ) : (
      null
    );

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" id="navbar-brand" href="./">
                <img className="logo" src={logo} alt="CSI VITAP" />{" "}
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="./" >
                    <h5 className="tag">HOME</h5>
                  </a>
                </li>
                <li>
                  <a href="http://csivitap.co.in/">
                    <h5 className="tag">WEBSITE</h5>
                  </a>
                </li>
                <li>
                  <a href="./">
                    <h5 className="tag">CONTACT US</h5>
                  </a>
                </li>
                <li>
                  <a>{authButton}</a>
                  {/* <button onClick={() => this.logout()}>Log Out</button> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
