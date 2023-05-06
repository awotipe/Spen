import React from "react";
import classes from "./waitlist.module.css";
import logo from "../../assets/logo.png";
import board from "../../assets/board.png";
import transfer from "../../assets/transfer.png";
import bills from "../../assets/bills.png";
import collection from "../../assets/collection.png";
import flexible from "../../assets/flexible.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
// import curve from '../../assets/redCurve.png'

const waitlist = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.hero}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.text}>
            <h2>Simplifying financial management for everyone.</h2>
            <p>
              Join Our waitlist to get exclusive updates and be the first to
              enjoy our new features.
            </p>
            <button>Join waitlist</button>
          </div>
          <div className={classes.board}>
            <img src={board} alt="img" />
          </div>
        </div>
      </div>
      <div className={classes.services}>
        <div className={classes.topServices}>
          <h3>Our Exciting Services</h3>
          <p>Explore all that have in stock for you</p>
        </div>

        <div className={classes.mainServices}>
          <div className={classes.cards1}>
            <div className={classes.card}>
              <div className={classes.image}>
                <img src={transfer} alt="transfer" />
              </div>
              <div className={classes.cardText}>
                <h4>Seamless Transfer</h4>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.image}>
                <img src={bills} alt="bills" />
              </div>
              <div className={classes.cardText}>
                <h4>Bills Payment</h4>
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.cards2}>
            <div className={classes.card}>
              <div className={classes.image}>
                <img src={collection} alt="collection" />
              </div>
              <div className={classes.cardText}>
                <h4>Collections Management</h4>
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.image}>
                <img src={flexible} alt="flexible" />
              </div>
              <div className={classes.cardText}>
                <h4>Flexible Settlement</h4>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
      <div className={classes.footInner}>
      <div className={classes.footText}>
        <p>Spen</p>
        </div>
        <div className={classes.footLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.footSocial}>
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedine" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default waitlist;
