import React from 'react';
import "../assets/css/homecontent.css";
import {useHistory} from "react-router-dom";
// import {Button} from "react-dom";
import illustration from "../assets/images/illustration.jpg";
import {motion} from "framer-motion"
import firebase from "../firebaseauth.js"



// const bounceTransition={
//     y:{
//         duration:0.4,
//         yoyo:Infinity,
//         ease:'easeOut'
//     }
// }




function HomeContent(){
    let history=useHistory();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            history.push("/registerstage1");
        } 
      });
    
    
        const handleOnClick=async(e)=>{
        const googleprovider=new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(googleprovider).then((res) =>{
            // console.log(res.user);     //   user id of the logged in user
            let userEmail=res.user.email;
            let uid=res.user.uid;
            let userName=res.user.displayName;
            let profileImg=res.user.photoURL;
            let createdTime=res.user.metadata.creationTime;
            let lastSignInTime=res.user.metadata.lastSignInTime;
            const firebaseDataRef=firebase.database().ref(`CSI/GoogleSignIn/${uid}`);
        // console.log(registerref)
            const firebaseDataSubmit={
            UserName:userName,
            UserEmail:userEmail,
            Uid:uid,
            ProfileImg:profileImg,
            CreatedTime:createdTime,
            LastSignInTime:lastSignInTime
            };
            firebaseDataRef.set(firebaseDataSubmit,error=>{
                if (error) {
                alert("Data could not be saved." + error);
                } else {
                    alert("Data Submitted Successfully");
                    history.push('/registerstage3');
                }
            });
            
        }).catch((error)=>{
            alert(`Please try again !!${error}`)
        });
    }
    return(
        <div className='container content'>
            <div className='row'>
                <div className='col-sm-5'>
                    <h1 
                        className='title'>
                            CSI CHAPTER VIT AP
                    </h1>
                    <h4
                        className='subhome'>
                            CORE TEAM SELECTIONS
                    </h4>
                    <p 
                        className='subcontent'>
                            Talent wins games, but teamwork and intelligence win championships
                    </p>
                    <motion.button 
                        className='btn reg' onClick={handleOnClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={{color:"white"}}>
                            REGISTER NOW

                    </motion.button>
                </div>
                
                <div className='col-sm-6 col-sm-offset-1'>
                    <motion.img 
                        className="illustration" 
                        src={illustration} 
                        alt="Welcome to CSI" 
                        // animate={{
                        //     y:["-100px","-50px"]
                        // }}
                        // transition={{ 
                        //     repeat: Infinity, 
                        //     repeatType: "reverse",
                        //     duration: 2,
                        //     bounceTransition 
                        // }}
                    />
                </div>
            
            </div>
        </div>
    );
}

export default HomeContent;