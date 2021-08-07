import React from 'react'
import logo from "../assets/images/logo.png"
import "../assets/css/header.css"
import firebase from "../firebaseauth.js"
import {Redirect} from "react-router-dom"
class Header extends React.Component{
    
    logout() {
        firebase.auth.signOut().then((result) => {
            console.log("hello")
        })
      }
    render(){
        return(
            <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" id="navbar-brand" href="./">
                        <img className="logo" src={logo} alt="CSI VITAP"/> </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href = "./"><h5 className="tag">HOME</h5></a></li>
                            <li><a href = "http://csivitap.co.in/"><h5 className="tag">WEBSITE</h5></a></li>
                            <li><a href = "./"><h5 className="tag">CONTACT US</h5></a></li>
                            <li><a onClick= {this.logout}><h5 className="tag">LOGOUT</h5></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;