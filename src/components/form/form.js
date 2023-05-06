import React from 'react'
import classes from './form.module.css'
import logo from "../../assets/logo.png";
import frame from "../../assets/redFrame.png";
import side from "../../assets/side.png";

const form = () => {
  return (
    <div className={classes.container} >
         <div className={classes.contain1} >
            <div className={classes.logo} >
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.frame} >
                <img src={frame} alt="frame" />
            </div>
            <div className={classes.side} >
                <img src={side} alt="side" />
            </div>
        </div>
        <div className={classes.contain2} >
            <div className={classes.topText} >
                <h1>Join Us Today!</h1>
                <p>Join Our waitlist to get exclusive updates and be the first to enjoy our new features.</p>
            </div>
            <div className={classes.field} >
               <form>
                     <input type="text" name="user_Name" placeholder="First Name"></input><br/>
                    <input type="text" name="user_Name" placeholder="Last Name"></input><br/>
                    <input type="text"  name="user_Email" placeholder="Email Address"></input>
               </form>
               <button>Join the waitlist</button>
            </div>
        </div>
    </div>
  )
}

export default form