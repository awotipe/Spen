import React from 'react'
import classes from './Business.module.css'

const Business = () => {
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
          <label for="businessName"> Business Name </label>
            <input
              type="text"
              name="text"
              placeholder="Enter Business Name"
            ></input>

          <label for="businessCategory"> Business category </label>
            <input
              type="text"
              name="text"
              placeholder="Select Business Category"
            ></input>

           <label for="businessType"> Business Type </label>
           <input
              type="text"
              name="text"
              placeholder="Select Business Type"
            ></input>
            <label for="businessType"> Business Type (if Others) </label>
            <input
              type="text"
              name="text"
              placeholder="Enter Business Type"
            ></input>
          </div>

          <label for="number"> RC Number (Optional) </label><br/>
      
            <input
              type="num"
              name="num"
              placeholder="Enter RC Number Here"
            ></input>
          
          <div className={classes.btn}>
            <button className={classes.btn1}>Go Back</button>
            <button className={classes.btn2}>Proceed</button>
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

export default Business