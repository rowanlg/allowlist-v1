import React, { useState } from "react";
import TwitterUser from "./TwitterUser";
import "../styles/ConnectScreen.scss";
import { getDatabase, ref, set } from "firebase/database";

const ConnectScreen = ({
  userDisplayName,
  userName,
  setUserDisplayName,
  setUserName,
  accounts,
  submitted,
  setSubmitted,
}) => {
  function writeUserData() {
    const db = getDatabase();
    set(ref(db, "addresses/" + userName), {
      address: accounts[0],
    })
      .then(() => {
        console.log("Succesfully updated database!");
        setSubmitted(!submitted);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="connect-screen-container">
      {accounts[0] ? (
        <>
          <div className="connect-section title">
            <h2>Register Now</h2>
          </div>

          <div className="breaker-large" />
          <div className="connect-section">
            <h3 className="requirements">Requirements</h3>
            <ul>
              <li>
                Follow <a href="https://twitter.com/">@CouldBeWorse</a> on
                Twitter
              </li>
              <li>
                Like <a href="https://twitter.com/">this</a> tweet
              </li>
            </ul>
          </div>
          <div className="breaker-small" />
          <div className="connect-section">
            <h3 className="twitter">Twitter</h3>
            <TwitterUser
              userDisplayName={userDisplayName}
              userName={userName}
              setUserDisplayName={setUserDisplayName}
              setUserName={setUserName}
            />
          </div>
          <div className="breaker-small" />
          <div className="connect-section">
            <h3 className="eth-address">ETH Address</h3>
            <p>{accounts[0]}</p>
          </div>
          <div className="breaker-small" />
          <p>
            Please make sure these details are correct, once they are submitted
            they cannot be changed.{" "}
          </p>
          <button
            className={
              userName
                ? submitted
                  ? "submitted-button"
                  : "submit-button"
                : "submitted-button"
            }
            onClick={() => {
              if (userName && !submitted) {
                writeUserData();
              }
            }}
          >
            {submitted ? "Submitted" : "Submit"}
          </button>
        </>
      ) : (
        <div className="placeholder">
          <h2>Connect Wallet</h2>
          <p>
            Congrats on making it this far, connect your wallet and complete the
            steps to join the allowlist!
          </p>
        </div>
      )}
    </div>
  );
};

export default ConnectScreen;
