import React, { useState } from "react";
import classes from "./Form2.module.css";
import logo from "../../assets/logo2.svg";
import frame from "../../assets/redFrame.png";
import side from "../../assets/side.png";


const Form2 = () => {   
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
  };
  return (
    <div className={classes.container}>
      <div className={classes.contain1}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.frame}>
          <img src={frame} alt="frame" />
        </div>
        <div className={classes.side}>
          <img src={side} alt="side" />
        </div>
      </div>
      <form className={classes.contain2}>
        <div className={classes.topText}>
          <h1>Join Us Today!</h1>
          <p>
            Join Our waitlist to get exclusive updates and be the first to enjoy
            our new features.
          </p>
        </div>
        <div className={classes.field}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={payload.firstName}
              onChange={handleChange}
              required
            ></input>
            <br />
            <input
              type="text"
              name="lastName"
              value={payload.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              required
            ></input>
            <br />
            <input
              type="email"
              name="email"
              value={payload.email}
              placeholder="Email Address"
              onChange={handleChange}
              required
            ></input>
            <button onClick={handleSubmit}>Join the waitlist</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
