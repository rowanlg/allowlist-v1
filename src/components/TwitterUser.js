import React from "react";
import "../styles/TwitterUser.scss";
import { firebase } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";

const TwitterUser = ({
  userDisplayName,
  userName,
  setUserDisplayName,
  setUserName,
}) => {
  const auth = getAuth();
  const provider = new TwitterAuthProvider();

  const signInWithTwitter = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUserDisplayName(result.user.displayName);
        setUserName(result._tokenResponse.screenName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutOfTwitter = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Succesful!");
        setUserDisplayName("");
        setUserName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="twitter-user-container">
      {userName ? (
        <>
          <div className="username-section">
            <h4>{userDisplayName}</h4>
            <p>@{userName}</p>
          </div>
          <button
            className="login"
            onClick={userName ? signOutOfTwitter : signInWithTwitter}
          >
            {userName ? "Log Out" : "Log in"}
          </button>
        </>
      ) : (
        <>
          <div className="top-section">
            <h3></h3>
            <p></p>
          </div>
          <button className="login" onClick={signInWithTwitter}>
            Log In
          </button>
        </>
      )}
    </div>
  );
};
export default TwitterUser;
