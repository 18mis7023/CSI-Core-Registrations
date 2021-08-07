import React ,{ useState,useEffect}from 'react';
import "../assets/css/registerstage2.css";
import TechnicalDpt from './Departments/TechnicalDpt';
import { useHistory } from 'react-router-dom';
import AdminDpt from './Departments/AdminDpt';
// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CreativeDpt from './Departments/CreativeDpt';
import MarketingDpt from './Departments/MarketingDpt';
import EventDpt from './Departments/EventDpt';
import DocumentationDpt from './Departments/DocumentationDpt';
import OutreachDpt from './Departments/OutreachDpt';


function RegisterStage2() {
  const [department, setDepartment] = useState("");
  const history=useHistory();
  const { state } = history.location;

  useEffect(() => {
    if(state!=null)
    {
      setDepartment(state.data.Department);
    }
  }, []);
  
  

  // setDepartment(state.data.department)
    return(
        <div className="container">
      <div className='row'>
        <div className="col-sm-10 col-sm-offset-1 left">
            <div id="timeline-wrap" >
                <div id="timeline2" ></div>
                  <div className="marker m1">
                    <button className='btn btnactive'>Personal Details</button>
                  </div>
                  <div className="marker m2">
                    <button className='btn btnactive'>Professional Details</button>
                  </div>
                  <div className="marker m3">
                    <button className='btn btnnotactive'>Submission</button>
                  </div>
            </div>
            <div className="stage2content">
              {(department==="Technical Department") ?
                 (<TechnicalDpt />) : 
                ((department==="Creative Department")
                    ?(<CreativeDpt />):
                    ((department==="Admin Department")
                        ?(<AdminDpt />): 
                        ((department==="Marketing Department")
                          ?(<MarketingDpt />):
                          ((department==="Event Management Department")
                            ?(<EventDpt />):
                            ((department==="Outreach Department")
                              ?(<OutreachDpt/>):
                              ((department==="Documentation Department")
                                ?(<DocumentationDpt />):
                                (<h2>Page has Expired !!! <br />Please Go to Home Page and Register the form </h2>)))))))}
{/*                 
                <AdminDpt />
                                  <CreativeDpt />
                                  <DocumentationDpt />
                                  <EventDpt />
                                  <MarketingDpt />
                                  <OutreachDpt />
                                  <TechnicalDpt /> */}
                
              {(department==="Technical Department" || department==="Creative Department" || department==="Admin Department" || department==="Event Management Department" || department==="Outreach Department" || department==="Documentation Department") ? 
              (<div>
                <h4 className='subtitle'>Terms and Conditions: <br />
                </h4>
                <button className="btn sub">REGISTER NOW</button></div>
                ) : (<p></p>) }
              
            </div>
        </div>      
      </div>
      
    </div>
    );
    
}

export default RegisterStage2;