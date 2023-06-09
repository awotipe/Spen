import React from 'react'
import classes from './success.module.css'
import logo from "../../assets/logo2.svg";
import frame from "../../assets/blackFrame.png";
import side from "../../assets/side.png";
import { Link } from "react-router-dom";

const success = () => {
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
           <h1>You have Successfully joined our waitlist</h1>
           <p>We will keep  you posted on all of our products and services</p>
       </div>
       <div className={classes.field} >
       <Link to="/">
          <button>Go Home</button>
          </Link>
       </div>
   </div>
</div>
  )
}

export default success