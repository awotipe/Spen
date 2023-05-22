import React, { useRef, useState } from "react";
import classes from "./form.module.css";
import logo from "../../assets/logo2.svg";
import frame from "../../assets/redFrame.png";
import side from "../../assets/side.png";
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";

const Result = () => {
  return (
    <p>Your message has been sent successfully.</p>
  );
};

const Form = () => {
  const [showResult, setShowResult] = useState(false);
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_y62nk9m", "template_1t4jvz2", form.current, "xyHAk9AtEsRaLv4kC")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Your message has been sent successfully.");
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
    }, 5000);
    history.push("/success");
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
      <form ref={form} onSubmit={sendEmail} className={classes.contain2}>
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
            required
          ></input>
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          ></input>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          ></input>
          <button type="submit">Join the waitlist</button>
          <div className={classes.row}>{showResult ? <Result /> : null}</div>
        </div>
      </form>
    </div>
  );
};

export default Form;