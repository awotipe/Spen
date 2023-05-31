import React from "react";
import classes from "./Personal.module.css";
import Nig from "../../assets/nigeria.png"

const Personal = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.innerText}>
          <form className={classes.contain2}>
            <div className={classes.topText}>
              <h3>Personal Information</h3>
              <p>Please enter your details.</p>
            </div>
            <div className={classes.field}>
            <div className={classes.name}>
            <label for="fname"> First Name </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
              ></input>
              </div>
              <div className={classes.name}>
            <label for="fname"> Last Name </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
              ></input>
              </div>
             </div>
             
             <div className={classes.field2}>
             <label for="employment"> Employment Type </label>
             <input
                type="text"
                name="text"
                placeholder="Select Employment Type"
              ></input>
              <label for="email"> Email Address </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              ></input>
            </div>

            <label for="phoneNumber"> Phone Number </label><br/>
            <div className={classes.number}>
            <div className={classes.code}>
              <button> 
                <img src={Nig} alt="nigLogo"/> 
                <p>+234</p>
                </button>
              </div>
              <div className={classes.phoneNum}>
              <input
                type="Phone"
                name="Phone"
                placeholder="Enter Phone Number here"
              ></input>
              </div>
             </div>
             <div className={classes.btn}>
              <button>Proceed</button>
              </div>
              <div className={classes.signIn}>
                <p>Already have an account? <span>Sign in</span></p>
              </div>
          </form>
        </div>
      </div>
      <div className={classes.side}>
        <div className={classes.overlay}></div>
      </div>
    </div>
  );
};

export default Personal;
