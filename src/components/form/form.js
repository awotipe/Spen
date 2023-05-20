import React, { useRef, useState } from "react";
import classes from "./form.module.css";
import logo from "../../assets/logo2.svg";
import frame from "../../assets/redFrame.png";
import side from "../../assets/side.png";
import emailjs from '@emailjs/browser';
// import { Link } from "react-router-dom";

const Result = () => {
  return (
    <p>Your message has been sent successfully.</p>
  );
};
const Form = () => {
  const [result, showResult] = useState (false, true)
  const form = useRef ()
  const sendEmail = (e) => {
    e.preventDefault();
    
      emailjs.sendForm("service_y62nk9m", "template_1t4jvz2", form.current, "xyHAk9AtEsRaLv4kC")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Your message has been sent successfully.")
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
   },5000 );
  // const [payload, setPayload] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   setPayload((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(payload);
  // };
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
      <form ref={form} onSubmit={sendEmail}className={classes.contain2}>
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
              // value={payload.firstName}
              // onChange={handleChange}
              required
            ></input>
            <br />
            <input
              type="text"
              name="lastName"
              // value={payload.lastName}
              placeholder="Last Name"
              // onChange={handleChange}
              required
            ></input>
            <br />
            <input
              type="email"
              name="email"
              // value={payload.email}
              placeholder="Email Address"
              // onChange={handleChange}
              required
            ></input>
          <button>Join the waitlist</button>
          <div className={classes.row}>{result ? <Result /> : null}</div>
          {/* <button onClick={handleSubmit}>Join the waitlist</button> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
